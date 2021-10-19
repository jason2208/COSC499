import publicHealerProfileHelper from './public-healer-profile-helper';

/**
 * Get a list of public healer profile
 * @note need to add pagination later on
 */
const getPublicHealerList = async (req, res, next) => {
  try {
    // limit and start is for pagination purpose
    const { limit, start } = req.query;
    const healerList = await publicHealerProfileHelper.getHealerList(
      limit,
      start
    );
    res.status(200).json(healerList);
  } catch (err) {
    next(err);
  }
};

/**
 * Get a healer profile based on healer profile id
 */
const getPublicHealerProfile = async (req, res, next) => {
  try {
    // const healerList = db.User.findAll({
    //     include: { model: db.HealerProfile, as: 'account'}
    // });
    const { healerProfileId } = req.params;
    const healerProfile = await publicHealerProfileHelper.getHealerProfile(
      healerProfileId
    );
    // later on will add review and services
    res.status(200).json(healerProfile);
  } catch (err) {
    next(err);
  }
};

export default {
  getPublicHealerList,
  getPublicHealerProfile,
};
