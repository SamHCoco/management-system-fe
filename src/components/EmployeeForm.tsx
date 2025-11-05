import { useForm } from "react-hook-form";
import { Employee } from "@/hooks/useEmployees";

function EmployeeForm() {
  const { register } = useForm<Employee>();

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
        <input id="middleNames" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input id="lastName" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="department" className="form-label">
          Department
        </label>
        <input id="department" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input id="email" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input id="phone" type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default EmployeeForm;
