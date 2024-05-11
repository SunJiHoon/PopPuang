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
