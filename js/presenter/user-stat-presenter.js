import UserStatView from '../view/user-stat-view';

export default function(userStats) {
  return new UserStatView(userStats);
}
