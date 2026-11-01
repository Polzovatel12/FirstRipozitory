// библиотека для работы со стандартными длинами матчей

import { GameMode } from 'pixel_combats/room';

// константы
const PARAMETER_GAME_LENGTH = 'GameLength';

// возвращает длину матча
export function game_mode_length_seconds() {
    const length = GameMode.Parameters.GetString(PARAMETER_GAME_LENGTH);
    switch (length) {
        case 'Length_S': return Infinity;
        case 'Length_M': return Infinity;
        case 'Length_L': return Infinity;
        case 'Length_XL': return Infinity;
    }
    return Infinity;
}
