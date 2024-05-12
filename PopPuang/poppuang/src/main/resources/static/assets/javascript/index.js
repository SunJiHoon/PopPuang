function updateClickCount() {
    // 선택한 부서 값 가져오기
    var departmentSelect = document.getElementById('department-select');
    var selectedDepartment = departmentSelect.value;

    fetch('/popCount/'+selectedDepartment) // 요청을 보낼 엔드포인트를 적절히 변경해야 합니다.
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // 응답을 텍스트로 변환하여 반환
        })
        .then(data => {
            // 응답 데이터를 가져와서 요소 내용을 업데이트
            var clickCountElement = document.getElementById('getNumber');
            clickCountElement.textContent = data;
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

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
    // 이전에 재생 중인 Audio 객체가 있으면 중지
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    // 선택한 부서 값 가져오기
    var departmentSelect = document.getElementById('department-select');
    var selectedDepartment = departmentSelect.value;

    sendPostRequest(selectedDepartment);
    updateClickCount();

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
    // 이전에 재생 중인 Audio 객체가 있으면 중지
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    var departmentSelect = document.getElementById('department-select');
    var selectedDepartment = departmentSelect.value;

    sendPostRequest(selectedDepartment);
    updateClickCount();

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
    fetch('/popCount/ranking')
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
                                <td>${item.name}</td>
                                <td>${item.count}</td>
                            </tr>
                        `;
                leaderboardBody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error fetching leaderboard data:', error));
}
//
// // 초기 실행
// updateLeaderboard();
setTimeout(updateLeaderboard, 1000);

// 10초마다 업데이트
setInterval(updateLeaderboard, 10000);

document.addEventListener('DOMContentLoaded', function() {
    //소리 초기화
    initPlaySound();
    
    // 페이지 로드가 완료되면 초기 실행
    updateClickCount();

    // select 요소 가져오기
    var departmentSelect = document.getElementById('department-select');

    // select 요소에 change 이벤트 리스너 추가
    departmentSelect.addEventListener('change', function() {
        // updateClickCount 함수 실행
        updateClickCount();
    });
});

var audio;
function initPlaySound() {
    // 음성 파일의 URL
    var soundURL = '/assets/audio/popSound_big2.m4a'; // 실제 음성 파일의 URL로 변경해야 합니다.

    // Audio 객체 생성
    audio = new Audio(soundURL);

    // 음성 재생
    // audio.play();
}

