function WeatherElementsDetail({ element, description }) {
  return (
    <>
      <p>
        <span className="font-medium mr-2 text-zinc-500">{element}</span>
        <span className="text-xl font-semibold text-zinc-900">
          {description}
        </span>
      </p>
    </>
  );
}

export default WeatherElementsDetail;
