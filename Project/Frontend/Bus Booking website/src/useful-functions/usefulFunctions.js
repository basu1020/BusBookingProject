export function filterBusesWithQuery(data, queries) {
    const filteredFromAndTo = data.filter(bus => {
        return bus.From === queries.from && bus.To === queries.to;
    });

    const filteredWithDay = filteredFromAndTo.filter(bus => {
        const weekDay = queries.date.getDay()

        return bus.DaysRunOn.includes([
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ][weekDay])
    })

    // const filteredWithTime

    return filteredWithDay
}

export const delay = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}