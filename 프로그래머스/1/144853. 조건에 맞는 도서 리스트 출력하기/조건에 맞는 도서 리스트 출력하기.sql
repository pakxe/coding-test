SELECT book_id, DATE_FORMAT(published_date, '%Y-%m-%d') AS PUBLISHED_DATE
FROM book 
WHERE SUBSTR(published_date, 1, 4) = '2021' AND category = '인문'
ORDER BY published_date ASC