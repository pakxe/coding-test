SELECT a.rest_id, a.rest_name, a.food_type, a.favorites, a.address, ROUND(AVG(b.review_score), 2) AS SCORE
FROM rest_info AS a
INNER JOIN rest_review AS b
ON a.rest_id = b.rest_id
WHERE SUBSTRING_INDEX(a.address, ' ', 1) IN ('서울특별시', '서울시')
GROUP BY a.rest_id
ORDER BY AVG(b.review_score) DESC, a.favorites DESC

# SELECT * FROM rest_info