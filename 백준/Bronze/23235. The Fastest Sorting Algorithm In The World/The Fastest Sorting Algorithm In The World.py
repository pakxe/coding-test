def main():
    import sys
    input = sys.stdin.read
    data = input().strip().split('\n')

    case_number = 1
    for line in data:
        if line == "0":
            break
        print(f"Case {case_number}: Sorting... done!")
        case_number += 1


main()