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
          <img
            src="../../assets/Icons/ic_Edit.png"
            width="25"
            height="25"
          />
          <img
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
//Hàm hiển thị ra dialog
//Author: DDDuong (8/12/2022)
const showDialog = function () {
  try {
    document.querySelector(".dialog-container").style.display = "flex";
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
  } catch (error) {
    console.log("error");
  }
};
//Hàm tắt dialog
//Author: DDDuong (8/12/2022)
const closeDialog = function () {
  try {
    document.querySelector(".dialog-container").style.display = "none";
  } catch (error) {
    console.log("error");
  }
};
createEvent();
/**
 * save dữ liệu
 * AUTHOR: DDDuong (09/12/2022)
 */
const bntSaveOnClick = function () {
  //1.Thu thập dữ liệu trên form
  const employeeCode = $(".dialog-el-2").val();
  const employeeName = $("#empName").val();
  const employeePhone = $(".dialog-el-5").val();
  const employeeEmail = $(".dialog-el-7").val();

  //2.kiểm tra dữ liệu
  //-Dữ liệu bắt buộc đã nhập chưa
  //-Dữ liệu đã đúng định dạng chưa
  //3. gọi API save dữ liệu
  //4. Xử lí thông tin từ API trả về
};
