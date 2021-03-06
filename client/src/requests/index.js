
const request = (url, payload) =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload),
  });

export const signup = ({ email, username, password }) =>
  request('/api/signup', { email, username, password });

export const login = ({ email, password }) =>
  request('/api/login', { email, password });

export const logout = () =>
  request('/api/logout', {});

export const isLoggedIn = () =>
  request('/api/is-logged-in', {});

export const getUserInfo = () =>
  request('/api/get-user-info', {});

export const exitRoom = () =>
  request('/api/exit-room', {});

export const getRooms = () =>
  request('/api/get-rooms', {});

export const getRoomInfo = ({ roomName }) =>
  request('/api/get-room-info', { roomName });

export const joinRoom = ({ roomName, characterName, token }) =>
  request('/api/join-room', { roomName, characterName, token });

export const masterJoinRoom = ({ roomName }) =>
  request('/api/master/join-room', { roomName });

export const masterGetRoomInfo = ({ roomName }) =>
  request('/api/master/get-room-info', { roomName });

export const getGameInfo = ({ roomName }) =>
  request('/api/game/get-game-info', { roomName });

export const getActionInfo = ({ gameName, actionName }) =>
  request('/api/game/get-action-info', { gameName, actionName });
