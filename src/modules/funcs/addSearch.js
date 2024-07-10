/**
 * Функция обработки фильтров
 * @param navigate
 * @param location
 * @param checkbox
 * @param option
 */
const addSearch = (navigate, location, checkbox, option,) => {
    //Создаём обработчик запросов url
    const query = new URLSearchParams(location.search);

    //Долгая и утомительная цепочка проверок
    //Флаг выставлен
    if (checkbox.checked) {
        //В url уже были значения
        if (location.search) {
            //Данного фильтра раньше не было
            if (!query.get(option)) {
                navigate(location.pathname + location.search + `&${option}=${checkbox.id}`);
                //Данный фильтр уже присутствовал с другими значениями
            } else {
                const oldValue = query.getAll(option);
                query.append(option, checkbox.id);
                const newValue = query.getAll(option);
                const newSearch = location.search.replace(`${option}=${oldValue}`, `${option}=${newValue}`);
                navigate(location.pathname + newSearch);
            }
            //URL был чист
        } else {
            query.append(option, checkbox.id);
            navigate(location.pathname + `?${option}=${query.getAll(option)}`);
        }
        //Флаг снят
    } else {
        const oldSearch = query.getAll(option)[0];
        const values = query.getAll(option)[0].split(',');
        values.splice(values.indexOf(checkbox.id), 1);
        query.delete(option);
        values.forEach(value => query.append(option, value));
        let otherKeys = 0; //Счётчик фильтров в параметрах url
        //Подсчёт количества остальных фильтров в url
        for (const key of query.keys()) {
            otherKeys++;
        }
        //Если других фильтров нет
        if (!otherKeys) {
            //Если есть другие значения у фильтра, с которого был снят флаг
            if (query.get(option)) {
                navigate(location.pathname + `?${option}=${query.getAll(option)}`);
                //Если нет
            } else {
                navigate(location.pathname);
            }
            //Если есть другие фильтры
        } else {
            let newSearch = '';
            //Если есть другие значения у фильтра, с которого был снят флаг
            if (query.get(option)) {
                newSearch = location.search.replace(`${option}=${oldSearch}`, `${option}=${query.getAll(option)}`);
                //Если нет
            } else {
                //Разбиваем строку, чтобы убрать лишние символы &
                const searchItems = location.search.replace('?', '').split('&');
                const resultItems = searchItems.filter(item => item !== `${option}=${oldSearch}`);
                newSearch = '?';
                //Заново собираем строку параметров url
                for (let i = 0; i < resultItems.length - 1; i++) {
                    newSearch += `${resultItems[i]}&`;
                }
                newSearch += `${resultItems[resultItems.length - 1]}`;
            }
            navigate(location.pathname + newSearch);
        }
    }
};

export default addSearch;