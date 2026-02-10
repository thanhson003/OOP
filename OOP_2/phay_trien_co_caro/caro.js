const size = 30;        // Kích thước bàn cờ (20x20)
const cellSize = 30;    // Kích thước mỗi ô (pixel)
let currentPlayer = 'X'; // Người bắt đầu luôn là X
let isGameOver = false; // Biến trạng thái để dừng game khi có người thắng

// Tạo mảng 2 chiều để lưu trạng thái bàn cờ (null: chưa đánh, 'X' hoặc 'O')
let boardArray = Array.from({ length: size }, () => Array(size).fill(null));

const boardElement = document.getElementById('board');

// Bước 1: Vẽ bàn cờ bằng vòng lặp
for (let r = 0; r < size; r++) {       // Lặp qua từng dòng (row)
    for (let c = 0; c < size; c++) {   // Lặp qua từng cột (column)
        let cell = document.createElement('div'); // Tạo thẻ div mới cho mỗi ô
        cell.className = 'cell';                  // Gán class để nhận CSS
        cell.style.left = (c * cellSize) + 'px';  // Tính vị trí ngang dựa trên cột
        cell.style.top = (r * cellSize) + 'px';   // Tính vị trí dọc dựa trên dòng
        cell.dataset.row = r;                     // Lưu chỉ số dòng vào HTML để dùng sau
        cell.dataset.col = c;                     // Lưu chỉ số cột vào HTML để dùng sau
        boardElement.appendChild(cell);           // Đưa ô vào trong bàn cờ
    }
}

// Bước 2: Xử lý sự kiện Click
boardElement.addEventListener('click', function(e) {
    if (isGameOver) return; // Nếu game kết thúc thì không cho đánh tiếp

    let cell = e.target; // Lấy phần tử cụ thể vừa được click

    // Kiểm tra: Phải click đúng ô 'cell' và ô đó phải còn trống
    if (!cell.classList.contains('cell') || cell.innerHTML !== '') return;

    let r = parseInt(cell.dataset.row); // Lấy số dòng từ dataset
    let c = parseInt(cell.dataset.col); // Lấy số cột từ dataset

    // Cập nhật logic dữ liệu
    boardArray[r][c] = currentPlayer;   // Lưu giá trị X hoặc O vào mảng 2 chiều

    // Cập nhật giao diện
    cell.innerHTML = currentPlayer;     // Hiển thị X hoặc O lên màn hình
    cell.style.color = (currentPlayer === 'X') ? 'red' : 'blue'; // X màu đỏ, O màu xanh

    // Bước 3: Kiểm tra thắng thua
    if (checkWin(r, c)) {
        setTimeout(() => alert("Người chơi " + currentPlayer + " đã chiến thắng!"), 10);
        isGameOver = true; // Đổi trạng thái để khóa bàn cờ
        return;
    }

    // Đổi lượt người chơi
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
});

// Hàm kiểm tra thắng cuộc tại vị trí vừa đánh (tối ưu hơn duyệt cả bàn cờ)
function checkWin(r, c) {
    const directions = [
        [0, 1],  // Hướng ngang (quét sang phải)
        [1, 0],  // Hướng dọc (quét xuống dưới)
        [1, 1],  // Hướng chéo xuôi ( \ )
        [1, -1]  // Hướng chéo ngược ( / )
    ];

    for (let [dr, dc] of directions) {
        let count = 1; // Tính chính ô vừa đánh là 1
        count += countContinuous(r, c, dr, dc);   // Đếm các ô cùng loại theo chiều thuận
        count += countContinuous(r, c, -dr, -dc); // Đếm các ô cùng loại theo chiều ngược lại

        if (count >= 5) return true; // Nếu tổng cộng đủ 5 ô liên tiếp thì thắng
    }
    return false;
}

// Hàm bổ trợ để đếm các ô liên tiếp giống nhau theo một hướng (dr, dc)
function countContinuous(r, c, dr, dc) {
    let count = 0;
    let currR = r + dr; // Di chuyển tới dòng tiếp theo
    let currC = c + dc; // Di chuyển tới cột tiếp theo

    // Vòng lặp chạy khi còn trong biên bàn cờ và ô tiếp theo vẫn giống người chơi hiện tại
    while (currR >= 0 && currR < size && currC >= 0 && currC < size &&
    boardArray[currR][currC] === currentPlayer) {
        count++;    // Tăng biến đếm
        currR += dr; // Tiếp tục tiến bước tiếp theo theo hướng dòng
        currC += dc; // Tiếp tục tiến bước tiếp theo theo hướng cột
    }
    return count;
}