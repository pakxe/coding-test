SELECT a.flavor
FROM first_half as a
INNER JOIN icecream_info as b
ON a.flavor = b.flavor
WHERE a.total_order > 3000 AND b.ingredient_type = 'fruit_based'
ORDER BY total_order DESC