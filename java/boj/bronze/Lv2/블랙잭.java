// 블랙잭
// 백준, 브론즈2, 2798
// 사실 자바 코딩테스트 문제는 처음이라 이상한 부분이 많습니다.
// 그걸 바탕으로 gpt에게 물어봐 정상적인 코드를 받아왔습니다.

// 우선 이상한 제 코드입니다.
import java.util.Scanner;
java.util.List; // import해서 가져와야해서 틀렸네요.
java.util.ArrayList;

public class Test {
                      // 저는 사실 아래에서 입력값을 숫자로 받았기 때문에 List<Integer> ar라고 했어야 했네요.
    public static int sum(String[] ar, int count, int result) {

        if (count == 0) return result;
        if (ar.length == 0 && count > 0) return -1;
        sum(ar, count, result);
       
        result += ar.remove(ar.length - 1); // 배열에는 length랑 size() 가능하군요.
        sum(ar, count - 1, result);
        // void를 안해줬으니깐 return 문이 있어야 하네요.
    }
    public static void main(String[] arr) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();
        int output = M;

        List<Integer> list = []; // new ArrayList<>(); 생성해야하는 거라는 걸 알았어요.

        for(int i = 0; i < N; i++) {
            list.add(sc.nextInt());
        }
        
        List<Integer> result = new ArrayList<>(); // 여긴 잘했네요.

        result.add(sum(list, 4, 0)); // 이렇게 하면 반환 값들이 result에 들어가는 줄 알았어요.

        for(int i = 0; i < result.size(); i++) {
            if (output > Math.abs(M - result[i])) {
                output = Math.abs(M - result[i]);
            }
        }

        System.out.println(output);
        sc.close();
    }
}


// ai(gpt)에게 도움을 받은 정답 코드입니다.
// 원래는 제가 List<Integer> + new ArrayList<>()를 사용해 객체를 만들었는데요, int[] 버전으로 어느순간 수정이 되어있었네요.
package boj.bronze.Lv2;

import java.util.Scanner;

public class 블랙잭 {

    // 개인적으로 매개변수가 많아서 괜찮은가 의심이 가네요.
    static int findMaxSum(int[] cards, int N, int M, int index, int count, int sum) {
    
        if (count == 3) {
            if (sum <= M) {
                return sum;
            } else {
                return 0; 
            }
        }

        if (index == N) {
            return 0;
        }

        
        int include = findMaxSum(cards, N, M, index + 1, count + 1, sum + cards[index]);
        int exclude = findMaxSum(cards, N, M, index + 1, count, sum);

        return Math.max(include, exclude);

    public static void main(String[] arr) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(); 
        int M = sc.nextInt();  
        int[] cards = new int[N]; 

        for (int i = 0; i < N; i++) {
            cards[i] = sc.nextInt();
        }

        int result = findMaxSum(cards, N, M, 0, 0, 0);

        System.out.println(result);
        sc.close();
    }
}
