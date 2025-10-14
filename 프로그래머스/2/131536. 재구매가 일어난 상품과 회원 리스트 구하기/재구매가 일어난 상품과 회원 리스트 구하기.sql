-- GROUP BY는 같은 값을 가진 행끼리 하나의 그룹으로 뭉쳐준다.
SELECT a.USER_ID, a.PRODUCT_ID
FROM online_sale AS a
GROUP BY a.user_id, a.product_id
HAVING COUNT(*) >= 2
ORDER BY a.user_id ASC, a.product_id DESC