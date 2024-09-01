import sys
input_data = sys.stdin.read().strip().split()
numbers = [int(x) for x in input_data]

numbers.sort();

print(numbers[len(numbers) - 2])