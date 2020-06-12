CREATE TABLE analytics (
  ID SERIAL PRIMARY KEY,
  browserLanguage VARCHAR(255),
  platform VARCHAR(255),
  userAgent VARCHAR(255),
  latitude int,
  longitude int,
  createdAt timestamp (0) with time zone default now(),
);

INSERT INTO analytics (browserLanguage, platform, userAgent, latitude, longitude)
VALUES  ('en-GB', 'MacIntel', 'Chrome', 6.5568767999999995, 3.3685503999999997);