#include <iostream>
#include <string>
#include <queue>
#include <vector>
using namespace std;

int main(){
    int n, num;
    string input;
    queue<int> q;
    
    cin >> n;
    for(int i = 0; i < n; i++){
        cin >> input;
        if(input == "push"){
            cin >> num;
            q.push(num);
        }
        if(input == "pop"){
            if(q.empty()) cout << -1 << endl;
            else{
                cout << q.front() << endl;
                q.pop();
            }
        }
        if(input == "size"){
            cout << q.size() << endl;
        }
        if(input == "empty"){
            if(q.empty()) cout << 1 << endl;
            else cout << 0 << endl;
        }
        if(input == "front"){
            if(q.empty()) cout << -1 << endl;
            else{
                cout << q.front() << endl;
            }
        }
        if(input == "back"){
            if(q.empty()) cout << -1 << endl;
            else cout << q.back() << endl;
        }
    }
}
