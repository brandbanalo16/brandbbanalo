<?php
$url = 'https://github.com/PHPMailer/PHPMailer/archive/refs/heads/master.zip';
$dest = __DIR__ . '/phpmailer_master.zip';
$ctx = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]);
$bytes = file_get_contents($url, false, $ctx);
if ($bytes === false) {
    echo "FAILED to download\n";
    exit(1);
}
file_put_contents($dest, $bytes);
echo "Downloaded: " . strlen($bytes) . " bytes\n";
