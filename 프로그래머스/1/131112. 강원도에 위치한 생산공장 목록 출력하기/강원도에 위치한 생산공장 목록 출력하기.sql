SELECT factory_id, factory_name, address
FROM food_factory
WHERE SUBSTRING_INDEX(address, ' ', 1) = '강원도'
ORDER BY factory_id ASC