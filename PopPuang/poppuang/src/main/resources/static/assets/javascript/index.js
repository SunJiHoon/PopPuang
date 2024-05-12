function sendPostRequest(department) {
    fetch('/pop', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:
        // "department="+department
            JSON.stringify({
            department: department
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Handle response
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}



// 이미지 요소 가져오기
// const poppuangImage = document.getElementById('poppuang-image');
// 숫자가 표시될 요소 가져오기
const numberElement = document.getElementById('number');
// 클릭 횟수 초기화
let clickCount = 0;

// 이미지 요소 가져오기
const closeImage = document.getElementById('poppuang-image_close');
const openImage = document.getElementById('poppuang-image_open');
// 이미지 상태를 추적하기 위한 변수
let isImageOpen = false;

// 이미지 클릭 상태를 추적하기 위한 변수
let isMouseDown = false;


// 이미지 클릭 이벤트 리스너 추가
closeImage.addEventListener('mousedown', function() {
    // 선택한 부서 값 가져오기
    var departmentSelect = document.getElementById('department-select');
    var selectedDepartment = departmentSelect.value;

    sendPostRequest(selectedDepartment);

    // 이미지 상태 변경
    isImageOpen = !isImageOpen;
    clickCount++;
    // 숫자 요소에 횟수 표시
    numberElement.textContent = clickCount;

    // 이미지 상태에 따라 보이기/숨기기 처리
    if (isImageOpen) {
        closeImage.style.display = 'none';
        openImage.style.display = 'block';
        // document.getElementById('status').textContent = '사진이 열려 있습니다.';
    }
});

openImage.addEventListener('mouseup', function() {
    // 이미지 상태 변경
    isImageOpen = !isImageOpen;
    // 이미지 상태에 따라 보이기/숨기기 처리
    if (!isImageOpen) {
        closeImage.style.display = 'block';
        openImage.style.display = 'none';
        // document.getElementById('status').textContent = '사진이 닫혀 있습니다.';
    }
});


closeImage.addEventListener('touchstart', function() {
    var departmentSelect = document.getElementById('department-select');
    var selectedDepartment = departmentSelect.value;

    sendPostRequest(selectedDepartment);

    // 이미지 상태 변경
    isImageOpen = !isImageOpen;
    clickCount++;
    // 숫자 요소에 횟수 표시
    numberElement.textContent = clickCount;

    // 이미지 상태에 따라 보이기/숨기기 처리
    if (isImageOpen) {
        closeImage.style.display = 'none';
        openImage.style.display = 'block';
        // document.getElementById('status').textContent = '사진이 열려 있습니다.';
    }
});

openImage.addEventListener('touchend', function() {
    // 이미지 상태 변경
    isImageOpen = !isImageOpen;
    // 이미지 상태에 따라 보이기/숨기기 처리
    if (!isImageOpen) {
        closeImage.style.display = 'block';
        openImage.style.display = 'none';
        // document.getElementById('status').textContent = '사진이 닫혀 있습니다.';
    }
});



// 데이터 업데이트 함수
function updateLeaderboard() {
    // fetch('your_api_url_here')
    fetch('/pop')
        .then(response => response.json())
        .then(data => {
            const leaderboardBody = document.getElementById('leaderboard-body');

            // 테이블 초기화
            leaderboardBody.innerHTML = '';

            // 데이터를 테이블에 삽입
            data.forEach((item, index) => {
                const row = `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${item.department}</td>
                                <td>${item.touch_count}</td>
                            </tr>
                        `;
                leaderboardBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error fetching leaderboard data:', error));
}

// 초기 실행
updateLeaderboard();

// 10초마다 업데이트
setInterval(updateLeaderboard, 10000);
