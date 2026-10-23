<?php
// One-time setup: Permanently symlinks public_html/_next to the git repository's .next directory
header('Content-Type: text/html; charset=utf-8');

$repoNext = '/home/sonaurah/repositories/medicaltourism/.next';
$publicNext = '/home/sonaurah/public_html/_next';

echo "<h2>Setting up permanent Next.js symlink on cPanel...</h2>";

if (!file_exists($repoNext)) {
    echo "<p style='color:red;'>Error: Repository .next folder not found at: $repoNext</p>";
    exit;
}

// If it's already a symlink, remove it to refresh
if (is_link($publicNext)) {
    unlink($publicNext);
    echo "<p>Existing symlink removed.</p>";
} elseif (is_dir($publicNext)) {
    // If it's a real directory, rename it as backup
    $backup = $publicNext . '_old_' . time();
    rename($publicNext, $backup);
    echo "<p>Existing static directory backed up to: $backup</p>";
}

// Create symlink
if (@symlink($repoNext, $publicNext)) {
    echo "<p style='color:green; font-weight:bold; font-size:18px;'>✓ SUCCESS! Permanent symlink created successfully.</p>";
    echo "<p><code>/home/sonaurah/public_html/_next</code> &rarr; <code>$repoNext</code></p>";
    echo "<p>From now on, every Git push will automatically update all CSS, JS, and build files on the live site without any manual uploads!</p>";
} else {
    // Fallback if symlink is disabled on PHP: copy the latest static folder directly
    echo "<p style='color:orange;'>Symlink not permitted by hosting policy. Performing deep sync copy fallback...</p>";
    exec("cp -r $repoNext/static $publicNext/static 2>&1", $out, $ret);
    if ($ret === 0) {
        echo "<p style='color:green;'>✓ Successfully copied latest static assets!</p>";
    } else {
        echo "<p style='color:red;'>Copy failed: " . implode("<br>", $out) . "</p>";
    }
}
?>
