import PageTitle from "../../components/PageTitle";

const shiftSchedule = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Employee", path: "/employee/shift" },
          { label: "Shift & Schedule", path: "/employee/shift", active: true },
        ]}
        title={"Shift & Schedule"}
      />
    </>
  );
};

export default shiftSchedule;
