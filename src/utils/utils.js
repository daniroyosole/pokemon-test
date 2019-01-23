export const COOKIES_LIST = 'PKMN-COOKIES_LIST-';
export const COOKIES_DETAIL = 'PKMN-COOKIES_DETAIL-';

export const capitalize = (s = '') => {
    if (s.length == 0) return '';
    return s[0].toUpperCase() + s.substring(1);
};

export const getNewTime = (minutes = 1) => {
    const newTime = new Date();
    newTime.setTime(newTime.getTime() + (minutes*60*1000));
    return newTime;
}