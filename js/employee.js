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
