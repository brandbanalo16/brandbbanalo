<?php
/**
 * Simple viewer for captured emails.
 */

$files = glob(__DIR__ . '/*.html');
rsort($files); // Newest first

// Handle file viewing
if (isset($_GET['file'])) {
    $file = basename($_GET['file']);
    $path = __DIR__ . '/' . $file;
    if (file_exists($path) && str_ends_with($file, '.html')) {
        echo file_get_contents($path);
        exit;
    }
}

// Handle deletion
if (isset($_POST['delete_all'])) {
    foreach ($files as $f) unlink($f);
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Captured Emails - Brandbanalo</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #333; max-width: 1000px; margin: 40px auto; padding: 0 20px; background: #f9f9f9; }
        h1 { border-bottom: 2px solid #000; padding-bottom: 10px; display: flex; justify-content: space-between; align-items: center; }
        .email-list { background: #fff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .email-item { padding: 15px 20px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; text-decoration: none; color: inherit; transition: background 0.2s; }
        .email-item:hover { background: #f0f7ff; }
        .email-item:last-child { border-bottom: none; }
        .email-info { flex-grow: 1; }
        .email-subject { font-weight: 600; font-size: 1.1rem; display: block; margin-bottom: 4px; }
        .email-meta { font-size: 0.85rem; color: #666; }
        .empty { padding: 40px; text-align: center; color: #999; }
        .btn-delete { background: #ff4d4f; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 0.9rem; }
        .btn-delete:hover { background: #ff7875; }
    </style>
</head>
<body>
    <h1>
        Captured Emails (Local)
        <?php if (!empty($files)): ?>
        <form method="POST" onsubmit="return confirm('Delete all captured emails?');">
            <button type="submit" name="delete_all" class="btn-delete">Clear All</button>
        </form>
        <?php endif; ?>
    </h1>

    <div class="email-list">
        <?php if (empty($files)): ?>
            <div class="empty">No emails captured yet. Submit a form to see them here.</div>
        <?php else: ?>
            <?php foreach ($files as $file): 
                $filename = basename($file);
                $parts = explode('_', $filename);
                $dateStr = str_replace('-', ':', $parts[0] . ' ' . $parts[1]);
                $subj = str_replace(['.html', '_'], ['' , ' '], implode('_', array_slice($parts, 2)));
            ?>
                <a href="?file=<?php echo urlencode($filename); ?>" class="email-item" target="_blank">
                    <div class="email-info">
                        <span class="email-subject"><?php echo htmlspecialchars($subj); ?></span>
                        <span class="email-meta"><?php echo htmlspecialchars($filename); ?></span>
                    </div>
                    <div style="font-size: 0.8rem; color: #888;">View &rarr;</div>
                </a>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
    
    <p style="margin-top: 20px; font-size: 0.9rem; color: #666;">
        Emails are stored in <code>php/captured_emails/</code>. 
        To send real emails, set <code>'debug_local' => false</code> in <code>php/config.php</code>.
    </p>
</body>
</html>
