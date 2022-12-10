"use strict";

// GOI API LAY DU LIEU
$.ajax({
  type: "GET",
  url: "https://amis.manhnv.net/api/v1/Employees",
  success(respone) {
    console.log(respone);
    for (const emp of respone) {
      const employeeCode = emp.EmployeeCode;
      const employeeName = emp.EmployeeName;
      const employeePhone = emp.TelephoneNumber;
      const employeeDepartment = emp.DepartmentName;
      const trHTML = `<tr>
        <td class="text-align-center"><input type="checkbox" /></td>
        <td class="text-align-center">${employeeCode || ""}</td>
        <td class="text-align-left">${employeeName || ""}</td>
        <td class="text-align-center">${employeePhone || ""}</td>
        <td>${employeeDepartment || ""}</td>
        <td>${employeeDepartment || ""}</td>
        <td>${employeeDepartment || ""}</td>
        <td class="text-align-center">
          <img
            src="../../assets/Icons/ic_Check.png"
            width="25"
            height="25"
          />
        </td>
        <td class="text-align-center">
          <img
            src="../../assets/Icons/ic_Check.png"
            width="25"
            height="25"
          />
        </td>
        <td class="text-align-center">
          <img class='cursor-pointer'
            src="../../assets/Icons/ic_Edit.png"
            width="25"
            height="25"
          />
          <img class='cursor-pointer'
            src="../../assets/Icons/ic_Remove.png"
            width="25"
            height="25"
          />
        </td>
      </tr>`;
      $("#tb-employee-list").append(trHTML);
    }
  },
  error(error) {
    console.log(error);
  },
});
/**
 * Hàm  mở dialog
 * AUTHOR: DDDuong (09/12/2022)
 */
const showDialog = function () {
  try {
    document.querySelector(".dialog-container").style.display = "flex";
    // Lấy mã nhân viên mới
    $.ajax({
      type: "GET",
      url: "https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode",
      success: function (response) {
        $("#txtEmployeeCode").val(response);
      },
    });
    //forcus vào ô nhập liệu đầu tiên
    $("#txtEmployeeCode").focus();
  } catch (error) {
    console.log("error");
  }
};
/**
 * Hàm  đóng dialog
 * AUTHOR: DDDuong (09/12/2022)
 */
const closeDialog = function () {
  try {
    document.querySelector(".dialog-container").style.display = "none";
  } catch (error) {
    console.log("error");
  }
};
/**
 * Hàm đóng mở combobox
 * AUTHOR: DDDuong (09/12/2022)
 */
const combobox1 = function () {
  try {
    $(".dialog-el-13").css("position", "static");
    $(".dialog-el-9-list").toggle();
    $(".dialog-el-11-list").hide();
    $(".dialog-el-13-list").hide();
  } catch (error) {
    console.log("error");
  }
};
const combobox2 = function () {
  try {
    $(".dialog-el-13").css("position", "static");
    $(".dialog-el-11-list").toggle();
    $(".dialog-el-9-list").hide();
    $(".dialog-el-13-list").hide();
  } catch (error) {
    console.log("error");
  }
};
const combobox3 = function () {
  try {
    $(".dialog-el-13").css("position", "relative");

    $(".dialog-el-13-list").toggle();
    $(".dialog-el-9-list").hide();
    $(".dialog-el-11-list").hide();
  } catch (error) {
    console.log("error");
  }
};

//Lập trình cho các sự kiện
//Author: DDDuong (8/12/2022)
const createEvent = function () {
  try {
    $(".content-header-add").click(showDialog);
    $(".dialog-close-button").click(closeDialog);
    $(".dialog-button-close").click(closeDialog);
    $(".dialog-el-9-select").click(combobox1);
    $(".dialog-el-11-select").click(combobox2);
    $(".dialog-el-13-select").click(combobox3);
    $("#dialog-button-save").click(bntSaveOnClick);
    $(".toast-message-close").click(bntCloseErrorMessage);
  } catch (error) {
    console.log("error");
  }
};
/**
 * Đóng thông báo lỗi khi nhập sai thông tin cán bộ
 * AUTHOR: DDDuong (10/12/2022)
 */
const bntCloseErrorMessage = function () {
  try {
    $(".toast-message").hide();
  } catch (error) {
    console.log("error");
  }
};
/**
 * save dữ liệu
 * AUTHOR: DDDuong (09/12/2022)
 */
const bntSaveOnClick = function () {
  try {
    //1.Thu thập dữ liệu trên form
    const employeeCode = $("#txtEmployeeCode").val();
    const employeeName = $("#txtEmployeeName").val();
    const mobie = $("#txtEmployeeMobie").val();
    const email = $("#txtEmployeeEmail").val();
    let errorMsgs = [];
    //2.kiểm tra dữ liệu
    //-Dữ liệu bắt buộc đã nhập chưa
    if (!employeeCode) {
      errorMsgs.push("Số hiệu cán bộ không được phép để trống");
    }
    if (!employeeName) {
      errorMsgs.push("Họ và tên không được phép để trống");
    }
    //Clear error message
    document.querySelector(".toast-message-content").innerHTML = "";
    //-Kiểm tra errorMsgs xem có lỗi không
    if (errorMsgs.length > 0) {
      for (const errMsg of errorMsgs) {
        $(".toast-message-content").append(`<div >${errMsg}</div>`);
      }
      // Nếu có lỗi thì hiển thị ra dialog báo lỗi
      $(".toast-message").css("display", "flex");
    }

    //3. gọi API save dữ liệu
    //4. Xử lí thông tin từ API trả về
  } catch (error) {
    console.log("error");
  }
};
createEvent();
