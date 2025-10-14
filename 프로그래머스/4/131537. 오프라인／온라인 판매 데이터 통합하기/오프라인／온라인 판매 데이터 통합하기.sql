WITH all_sales AS (
    SELECT sales_date, product_id, user_id, sales_amount
    FROM online_sale
    UNION ALL
    SELECT sales_date, product_id, NULL AS user_id, sales_amount
    FROM offline_sale
)
SELECT DATE_FORMAT(sales_date, '%Y-%m-%d') AS sales_date, product_id, user_id, sales_amount
FROM all_sales
WHERE SUBSTR(sales_date, 1, 7) = '2022-03'
ORDER BY sales_date ASC, product_id ASC, user_id ASC