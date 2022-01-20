module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd61f20b3d358792d4170e9b31dc628d5'),
  },
});
