<?php
// Instant sync & restart: Copies latest static assets directly into public_html and restarts Passenger
header('Content-Type: text/html; charset=utf-8');

$repoDir = '/home/sonaurah/repositories/medicaltourism';
$repoStatic = $repoDir . '/.next/static';
$publicNext = '/home/sonaurah/public_html/_next';
$publicStatic = $publicNext . '/static';

echo "<h2>Syncing Next.js Assets & Restarting Server...</h2>";

if (!file_exists($repoStatic)) {
    echo "<p style='color:red;'>Error: Repository static folder not found at: $repoStatic</p>";
    exit;
}

if (!file_exists($publicNext)) {
    mkdir($publicNext, 0755, true);
}

// Deep copy helper
function copyDir($src, $dst) {
    $dir = opendir($src);
    @mkdir($dst, 0755, true);
    $count = 0;
    while (($file = readdir($dir)) !== false) {
        if ($file != '.' && $file != '..') {
            if (is_dir($src . '/' . $file)) {
                $count += copyDir($src . '/' . $file, $dst . '/' . $file);
            } else {
                copy($src . '/' . $file, $dst . '/' . $file);
                $count++;
            }
        }
    }
    closedir($dir);
    return $count;
}

echo "<p>Copying latest static chunks, CSS, and manifests...</p>";
$copied = copyDir($repoStatic, $publicStatic);
echo "<p style='color:green; font-weight:bold;'>✓ Successfully copied $copied asset files to public_html/_next/static!</p>";

$buildId = trim(@file_get_contents($repoDir . '/.next/BUILD_ID'));
echo "<p>Active Build ID: <strong>$buildId</strong></p>";

// Trigger Node.js Passenger restart
$tmpDir = $repoDir . '/tmp';
@mkdir($tmpDir, 0755, true);
$restartFile = $tmpDir . '/restart.txt';
@touch($restartFile);
echo "<p style='color:green; font-weight:bold; font-size:18px;'>✓ Passenger Restart Triggered via $restartFile!</p>";

echo "<p style='color:blue;'>Now refresh <a href='/' target='_blank'>sonaurahealthcare.com</a> with Ctrl+Shift+R and test your contact form!</p>";
?>
