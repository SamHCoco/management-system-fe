import { useForm } from "react-hook-form";
import { Employee } from "@/hooks/useEmployees";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function EmployeeForm() {
  const { register, reset } = useForm<Employee>();
  const location = useLocation();

  const employee = (location.state as { employee?: Employee })?.employee;
  const isEdit = !!employee;

  useEffect(() => {
    if (employee) {
      reset(employee);
    }
  }, [employee, reset]);

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          {...register("firstName")}
          id="firstName"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="middleNames" className="form-label">
          Middle Names
        </label>
        <input
          {...register("middleNames")}
          id="middleNames"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          {...register("lastName")}
          id="lastName"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="department" className="form-label">
          Department
        </label>
        <input
          {...register("department")}
          id="department"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          {...register("phone")}
          id="phone"
          type="text"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {isEdit ? "Update Employee" : "Create Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;
