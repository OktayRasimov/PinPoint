import ReactCountryFlag from "react-country-flag";

function CountriesEach() {
  return (
    <div>
      <ReactCountryFlag
        countryCode="BG"
        svg
        style={{
          width: "4em",
          height: "4em",
        }}
        title="BG"
      />
    </div>
  );
}

export default CountriesEach;
