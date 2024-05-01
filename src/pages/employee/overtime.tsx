import PageTitle from "../../components/PageTitle";

const overtime = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Employee", path: "/employee/overtime" },
          { label: "Overtime", path: "/employee/overtime", active: true },
        ]}
        title={"Overtime"}
      />
    </>
  );
};

export default overtime;
