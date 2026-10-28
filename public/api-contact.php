<?php
// Sonaura Healthcare - Bulletproof Server-Side Contact API
// Delivers directly to sonaurahealth@gmail.com via authenticated Webmail SMTP (Port 465 SSL)

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Read JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data || !is_array($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$country = trim($data['country'] ?? 'Not specified');
$treatment = trim($data['treatment'] ?? 'General Inquiry');
$message = trim($data['message'] ?? 'No description provided');

// Validation
if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name, email, and phone number are required.']);
    exit;
}

$to = 'sonaurahealth@gmail.com';
$smtpUser = 'info@sonaurahealthcare.com';
$smtpPass = 'nb2136tit29knwfj';
$smtpHost = 'ssl://sonaurahealthcare.com';
$smtpPort = 465;

$subject = "🏥 New Patient Inquiry: " . $name . " - Sonaura HealthCare";

$htmlBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%); padding: 28px 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
    .header p { margin: 6px 0 0; opacity: 0.9; font-size: 13px; }
    .body { padding: 28px 24px; }
    .field { margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0f172a; font-weight: 500; }
    .badge { display: inline-block; background-color: #e0f2fe; color: #0284c7; padding: 4px 10px; border-radius: 9999px; font-weight: 600; font-size: 12px; }
    .message-box { background: #f8fafc; border-left: 4px solid #0284c7; padding: 14px 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; }
    .footer { background: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h1>Sonaura HealthCare</h1>
      <p>New Patient Consultation Request</p>
    </div>
    <div class='body'>
      <div class='field'>
        <div class='label'>Patient Name</div>
        <div class='value'>" . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</div>
      </div>
      <div class='field'>
        <div class='label'>Email Address</div>
        <div class='value'><a href='mailto:" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "'>" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</a></div>
      </div>
      <div class='field'>
        <div class='label'>Phone / WhatsApp</div>
        <div class='value'><a href='tel:" . htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') . "'>" . htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') . "</a></div>
      </div>
      <div class='field'>
        <div class='label'>Country</div>
        <div class='value'>" . htmlspecialchars($country, ENT_QUOTES, 'UTF-8') . "</div>
      </div>
      <div class='field'>
        <div class='label'>Requested Treatment / Specialty</div>
        <div class='value'><span class='badge'>" . htmlspecialchars($treatment, ENT_QUOTES, 'UTF-8') . "</span></div>
      </div>
      <div class='field' style='border-bottom: none;'>
        <div class='label'>Medical Case Details / Query</div>
        <div class='message-box'>" . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . "</div>
      </div>
    </div>
    <div class='footer'>
      Received via sonaurahealthcare.com enquiry portal • Direct Webmail Delivery
    </div>
  </div>
</body>
</html>
";

function sendSmtpMail($host, $port, $user, $pass, $from, $to, $subject, $html) {
    $socket = @fsockopen($host, $port, $errno, $errstr, 12);
    if (!$socket) {
        return false;
    }

    $read = function() use ($socket) {
        $reply = '';
        while ($line = fgets($socket, 515)) {
            $reply .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $reply;
    };

    $read();
    fputs($socket, "EHLO sonaurahealthcare.com\r\n");
    $read();
    fputs($socket, "AUTH LOGIN\r\n");
    $read();
    fputs($socket, base64_encode($user) . "\r\n");
    $read();
    fputs($socket, base64_encode($pass) . "\r\n");
    $res = $read();
    if (strpos($res, '235') === false) {
        fclose($socket);
        return false;
    }

    fputs($socket, "MAIL FROM:<$from>\r\n");
    $read();
    fputs($socket, "RCPT TO:<$to>\r\n");
    $read();
    fputs($socket, "DATA\r\n");
    $read();

    $headers = "From: \"Sonaura HealthCare\" <$from>\r\n";
    $headers .= "Reply-To: $user\r\n";
    $headers .= "To: $to\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";

    fputs($socket, $headers . "\r\n" . $html . "\r\n.\r\n");
    $finalRes = $read();
    fputs($socket, "QUIT\r\n");
    fclose($socket);

    return (strpos($finalRes, '250') !== false);
}

// 1. Try authenticated SSL SMTP directly
$sent = sendSmtpMail($smtpHost, $smtpPort, $smtpUser, $smtpPass, $smtpUser, $to, $subject, $htmlBody);

// 2. If SMTP fails, fallback to PHP native mail()
if (!$sent) {
    $mailHeaders = "From: Sonaura HealthCare <$smtpUser>\r\n";
    $mailHeaders .= "Reply-To: $email\r\n";
    $mailHeaders .= "MIME-Version: 1.0\r\n";
    $mailHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    $sent = @mail($to, $subject, $htmlBody, $mailHeaders);
}

if ($sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your inquiry has been sent successfully. Our medical coordinator will contact you shortly.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to send message at this time. Please contact us directly via WhatsApp.'
    ]);
}
?>
