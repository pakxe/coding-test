SELECT id, length
FROM fish_info
WHERE length IS NOT NULL
ORDER BY length DESC, id ASC
LIMIT 10