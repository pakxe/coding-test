#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;

int dpArr[1000001];

int DP(int n) {
    if (n == 1) {
        return 0;
    }

    int cur = dpArr[n];
    
    if (cur != -1) {
        return dpArr[n];
    }

    dpArr[n] = DP(n - 1) + 1;
    if (n % 2 == 0) {
        dpArr[n] = min(DP(n / 2) + 1, dpArr[n]);
    }
    if(n % 3 == 0) {
        dpArr[n] = min(DP(n / 3) + 1, dpArr[n]);
    }

    return dpArr[n];

    
}
int main() {
    memset(dpArr, -1, sizeof(dpArr));
    int n;
    cin >> n;

    cout << DP(n) << endl;
    
}