module.exports = d => {
    const data = d.util.aoiFunc(d);

    data.result = d.data.interaction?.isAnySelectMenu();

    return {
        code: d.util.setCode(data)
    }
}