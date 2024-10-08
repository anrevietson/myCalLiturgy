(function(window) {
    // Hàm 01: Tính ngày Chúa nhật Phục sinh
    function getEasterDate(year) {
        let a = year % 19;
        let b = Math.floor(year / 100);
        let c = year % 100;
        let d = Math.floor(b / 4);
        let e = b % 4;
        let f = Math.floor((b + 8) / 25);
        let g = Math.floor((b - f + 1) / 3);
        let h = (19 * a + b - d - g + 15) % 30;
        let i = Math.floor(c / 4);
        let k = c % 4;
        let l = (32 + 2 * e + 2 * i - h - k) % 7;
        let m = Math.floor((a + 11 * h + 22 * l) / 451);
        let month = Math.floor((h + l - 7 * m + 114) / 31);
        let day = ((h + l - 7 * m + 114) % 31) + 1;
        return new Date(year, month - 1, day);
    }

    // Hàm 02: Tính Chúa nhật thứ nhất Mùa Vọng
    function getFirstSundayOfAdvent(year) {
        const christmasDate = new Date(year, 11, 25);
        let date;
        if (christmasDate.getDay() === 0) {
            date = new Date(christmasDate);
            date.setDate(christmasDate.getDate() - 28);
        } else {
            date = new Date(christmasDate);
            date.setDate(christmasDate.getDate() - 21);
        }
        while (date.getDay() !== 0) {
            date.setDate(date.getDate() - 1);
        }
        return date;
    }

    // Hàm 03: Tìm Chúa nhật Chúa Hiển Linh
    function getEpiphanySunday(year) {
        let date = new Date(year, 0, 2); // Bắt đầu từ ngày 2/1
        while (date.getDay() !== 0 && date.getDate() <= 8) {
            date.setDate(date.getDate() + 1);
        }
        return date;
    }

    // Hàm 04: Tìm lễ Chúa Giêsu chịu phép rửa
    function getBaptismOfTheLord(year) {
        const epiphanySunday = getEpiphanySunday(year);
        if (epiphanySunday.getDate() === 7 || epiphanySunday.getDate() === 8) {
            return new Date(year, 0, epiphanySunday.getDate() + 1); // Ngày kế tiếp là 8 hoặc 9
        }
        const baptismOfTheLord = new Date(epiphanySunday);
        baptismOfTheLord.setDate(epiphanySunday.getDate() + 7); // Chúa nhật sau Hiển Linh
        return baptismOfTheLord;
    }

    // Hàm 05: Tính Thứ Tư Lễ Tro
    function getAshWednesday(easterDate) {
        let ashWednesday = new Date(easterDate);
        ashWednesday.setDate(easterDate.getDate() - 46);
        return ashWednesday;
    }

    // Hàm 06: Tính lễ Chúa Thánh Thần Hiện Xuống
    function getPentecost(easterDate) {
        let pentecost = new Date(easterDate);
        pentecost.setDate(easterDate.getDate() + 49);
        return pentecost;
    }

    // Hàm 07: Tính lễ Chúa Kitô Vua
    function getChristTheKing(year) {
        const firstSundayOfAdvent = getFirstSundayOfAdvent(year);
        let christTheKing = new Date(firstSundayOfAdvent);
        christTheKing.setDate(firstSundayOfAdvent.getDate() - 7);
        return christTheKing;
    }

    // Hàm mới: Tính ngày Lễ Thánh Gia Thất
    function getHolyFamilyFeast(year) {
        const christmasDate = new Date(year, 11, 25);
        if (christmasDate.getDay() === 0) {
            // Nếu ngày 25/12 là Chủ nhật, Lễ Thánh Gia Thất là ngày 30/12
            return new Date(year, 11, 30);
        } else {
            // Nếu không, Lễ Thánh Gia Thất là Chúa nhật sau ngày 25/12
            let holyFamilyFeast = new Date(christmasDate);
            while (holyFamilyFeast.getDay() !== 0) {
                holyFamilyFeast.setDate(holyFamilyFeast.getDate() + 1);
            }
            return holyFamilyFeast;
        }
    }

    // Đăng ký các hàm vào phạm vi toàn cục (global scope)
    window.getEasterDate = getEasterDate;
    window.getFirstSundayOfAdvent = getFirstSundayOfAdvent;
    window.getEpiphanySunday = getEpiphanySunday;
    window.getBaptismOfTheLord = getBaptismOfTheLord;
    window.getAshWednesday = getAshWednesday;
    window.getPentecost = getPentecost;
    window.getChristTheKing = getChristTheKing;
    window.getHolyFamilyFeast = getHolyFamilyFeast;

})(window);
