import dayjs from "dayjs";
import UTCPlugin from "dayjs/plugin/utc";
import TimezonePLugin from "dayjs/plugin/timezone";
dayjs.extend(UTCPlugin);
dayjs.extend(TimezonePLugin);

export default function Home() {
  const when = dayjs("2021-12-17T00:39:32.000Z").tz("Europe/Paris");

  const daylightSavingIssue = when.toISOString();

  const daylightSavingFix = when.format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z";

  return (
    <div>
      <div>Issue : </div>
      <div>{daylightSavingIssue}</div>
      <div>Fix : </div>
      <div>{daylightSavingFix}</div>
    </div>
  );
}
