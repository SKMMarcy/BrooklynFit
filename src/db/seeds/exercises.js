/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const exercises = [
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/If6PR56qjoPyh4",
    "id": 1,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/naG9D34uNCSQHk",
    "id": 2,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.\nKeeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.\nPause for a moment at the bottom, then slowly return to the starting position.\nRepeat on the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/QxGXcAPpI10v7R",
    "id": 3,
    "target": "abs",
    "instructions": "Lie flat on your back with your hands placed behind your head.\nLift your legs off the ground and bend your knees at a 90-degree angle.\nBring your right elbow towards your left knee while simultaneously straightening your right leg.\nReturn to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.\nContinue alternating sides in a pedaling motion for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/2LfekjIOWTLI-D",
    "id": 1512,
    "target": "quads",
    "instructions": "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.\nExtend one leg straight back, keeping your knee bent and your foot flexed.\nSlowly lower your hips towards the ground, feeling a stretch in your quads.\nHold this position for 20-30 seconds.\nSwitch legs and repeat the stretch on the other side."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/EXtSlr3PbWJoWb",
    "id": 6,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nExtend your arms straight out to the sides, parallel to the ground.\nEngaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.\nReturn to the starting position and repeat on the left side, reaching your left hand towards your left heel.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/qSOGE1mNqK30CM",
    "id": 1368,
    "target": "calves",
    "instructions": "Sit on the ground with your legs extended in front of you.\nLift one leg off the ground and rotate your ankle in a circular motion.\nPerform the desired number of circles in one direction, then switch to the other direction.\nRepeat with the other leg."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/fkjTRvQawGlm-n",
    "id": 3293,
    "target": "lats",
    "instructions": "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.\nEngage your core and pull your shoulder blades down and back.\nAs you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.\nContinue pulling until your chin is above the bar and your bent arm is fully flexed.\nLower yourself back down with control, straightening the bent arm and repeating the movement on the other side.\nAlternate sides with each repetition."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/zpd4FknibGJulY",
    "id": 3294,
    "target": "pectorals",
    "instructions": "Start in a push-up position with your hands slightly wider than shoulder-width apart.\nExtend one arm straight out to the side, parallel to the ground.\nLower your body by bending your elbows, keeping your back straight and core engaged.\nPush back up to the starting position.\nRepeat on the other side, extending the opposite arm out to the side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/-L-uLetUoesXbn",
    "id": 2355,
    "target": "abs",
    "instructions": "Hang from a pull-up bar with your arms fully extended and your knees bent at a 90-degree angle.\nEngage your core and lift your knees towards your chest, bringing them as close to your elbows as possible.\nSlowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/5Fj3Df1kIkykyY",
    "id": 2333,
    "target": "abs",
    "instructions": "Hang from a pull-up bar with your arms fully extended and your legs straight down.\nEngage your core and lift your legs up in front of you until they are parallel to the ground.\nHold for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ZFX5vOdrotkiPf",
    "id": 3214,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart and arms extended to the sides.\nKeeping your legs straight, bend forward at the waist and reach down towards your toes with your right hand.\nAs you reach down, simultaneously lift your left leg straight up behind you, maintaining balance.\nReturn to the starting position and repeat the movement with your left hand reaching towards your toes and your right leg lifting up behind you.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/X2684eBUAmNHcw",
    "id": 3204,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nExtend your arms overhead, keeping them straight.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is upright.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/pddPOmpOFjRzgB",
    "id": 14,
    "target": "abs",
    "instructions": "Sit on the ground with your knees bent and feet flat on the floor.\nHold the medicine ball with both hands in front of your chest.\nLean back slightly, engaging your abs and keeping your back straight.\nSlowly twist your torso to the right, bringing the medicine ball towards the right side of your body.\nPause for a moment, then twist your torso to the left, bringing the medicine ball towards the left side of your body.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/e0WMsn52XC3D8s",
    "id": 3220,
    "target": "cardiovascular system",
    "instructions": "Stand with your feet shoulder-width apart.\nBend your knees and lower your body into a squat position.\nJump explosively upwards, extending your legs and arms.\nWhile in the air, spread your legs apart and bring your arms out to the sides.\nLand softly with your feet shoulder-width apart, bending your knees to absorb the impact.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Y4TmXpjJzS6uOd",
    "id": 3672,
    "target": "cardiovascular system",
    "instructions": "Stand with your feet shoulder-width apart.\nStep forward with your right foot, bending your knee and lowering your body into a lunge position.\nPush off with your right foot and step back to the starting position.\nRepeat the movement with your left foot, alternating legs with each step.\nContinue stepping back and forth, maintaining a steady pace.\nRepeat for the desired duration or number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/GdG15JPmJ5OXPS",
    "id": 1314,
    "target": "spine",
    "instructions": "Place the stability ball on the ground and lie face down on top of it, with your hips resting on the ball and your feet against a wall or other stable surface.\nPosition your hands behind your head or crossed over your chest.\nEngage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your heels.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/troJOph4YL70p2",
    "id": 3297,
    "target": "upper back",
    "instructions": "Start by hanging from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.\nEngage your core and pull your shoulder blades down and back.\nBend your knees and tuck them towards your chest.\nSlowly lift your legs up, keeping them straight, until your body is parallel to the ground.\nHold this position for a few seconds, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/PW-anV-QJXuuoK",
    "id": 1405,
    "target": "lats",
    "instructions": "Stand tall with your feet shoulder-width apart.\nExtend your arms straight out in front of you, parallel to the ground.\nCross your arms in front of your body, with your right arm over your left arm.\nInterlock your fingers and rotate your palms away from your body.\nSlowly raise your arms up and away from your body, feeling a stretch in your back and chest.\nHold the stretch for 15-30 seconds, then release.\nRepeat on the opposite side."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/9dt0Dn4MCCJmUi",
    "id": 1473,
    "target": "quads",
    "instructions": "Stand with your feet shoulder-width apart.\nBend your knees slightly and jump backwards, pushing off with both feet.\nLand softly on the balls of your feet, bending your knees to absorb the impact.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/WMO4gugDGvKKYW",
    "id": 20,
    "target": "quads",
    "instructions": "Place the balance board on a flat surface.\nStep onto the balance board with one foot, ensuring it is centered.\nSlowly shift your weight onto the foot on the balance board, keeping your core engaged.\nMaintain your balance and stability as you hold the position for a desired amount of time.\nRepeat the exercise with the other foot."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/-Ftn6oEUqLFZ7r",
    "id": 968,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart and hold the band with an underhand grip, palms facing up.\nKeep your elbows close to your sides and slowly curl one arm up towards your shoulder, squeezing your biceps at the top.\nLower the arm back down to the starting position and repeat with the other arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/--Aees30cRhqfw",
    "id": 969,
    "target": "abs",
    "instructions": "Lie flat on your back with your legs straight and your arms extended overhead, holding the band.\nEngage your abs and lift your legs and upper body off the ground simultaneously, reaching your hands towards your toes.\nAs you lower your legs and upper body back down, switch the position of your legs, crossing one over the other.\nRepeat the movement, alternating the position of your legs with each repetition.\nContinue for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/fSKf5CuJtN2V1s",
    "id": 970,
    "target": "lats",
    "instructions": "Attach the band to a pull-up bar or sturdy anchor point.\nStep onto the band and grip the bar with your palms facing away from you, hands slightly wider than shoulder-width apart.\nHang with your arms fully extended, keeping your core engaged and your shoulders down and back.\nPull your body up towards the bar by squeezing your shoulder blades together and driving your elbows down towards your hips.\nContinue pulling until your chin is above the bar, then slowly lower yourself back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/QHfgjJtq-pTjf-",
    "id": 971,
    "target": "abs",
    "instructions": "Kneel on the floor and hold the handles of the band with both hands, palms facing down.\nPlace the band on the ground in front of you and position your hands shoulder-width apart.\nEngage your core and slowly roll the wheel forward, extending your body as far as you can while maintaining control.\nPause for a moment at the furthest point, then slowly roll the wheel back towards your knees to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/YQN1Vf4WdyKcMC",
    "id": 1254,
    "target": "pectorals",
    "instructions": "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.\nGrasp the band handles with an overhand grip, slightly wider than shoulder-width apart.\nExtend your arms fully, pushing the bands away from your chest.\nSlowly lower the bands back down to your chest, keeping your elbows at a 90-degree angle.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/OD3PtXDivHOyoW",
    "id": 980,
    "target": "glutes",
    "instructions": "Attach the band to a sturdy anchor point at ankle height.\nStand facing away from the anchor point with your feet shoulder-width apart.\nStep back to create tension in the band, keeping your knees slightly bent.\nHinge at the hips and lean forward, maintaining a neutral spine.\nExtend your right leg straight back, squeezing your glutes at the top.\nLower your right leg back down and repeat with the left leg.\nContinue alternating legs for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/JPpzZEceCxYwlN",
    "id": 972,
    "target": "abs",
    "instructions": "Lie flat on your back with your hands behind your head and your knees bent.\nLift your feet off the ground and bring your right knee towards your chest while simultaneously twisting your torso to bring your left elbow towards your right knee.\nStraighten your right leg while bringing your left knee towards your chest and twisting your torso to bring your right elbow towards your left knee.\nContinue alternating the twisting motion, as if you are pedaling a bicycle, while keeping your core engaged throughout the movement.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/kCMxGVrlaSVdug",
    "id": 974,
    "target": "lats",
    "instructions": "Attach the band to a high anchor point, such as a pull-up bar or sturdy beam.\nStand facing the anchor point and grab the band with an underhand grip, hands shoulder-width apart.\nStep back to create tension in the band, keeping your feet hip-width apart.\nEngage your core and keep your back straight as you pull the band down towards your chest, squeezing your shoulder blades together.\nPause for a moment at the bottom of the movement, then slowly release the band back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/sJ8JuH6Fm1XD9K",
    "id": 975,
    "target": "triceps",
    "instructions": "Place a band around your upper arms, just above the elbows.\nAssume a push-up position with your hands directly under your shoulders and your body in a straight line from head to heels.\nBend your elbows and lower your chest towards the ground, keeping your elbows close to your sides.\nPush through your palms to extend your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/q23w-Szn4mfKDW",
    "id": 976,
    "target": "biceps",
    "instructions": "Sit on a bench or chair with your legs spread apart and your feet flat on the ground.\nHold one end of the band in your hand and step on the other end with your foot on the same side.\nLean forward slightly and rest your elbow on the inside of your thigh, just above the knee.\nWith your palm facing up, slowly curl your hand towards your shoulder, keeping your upper arm stationary.\nPause for a moment at the top, then slowly lower your hand back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "back",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/-umG3gUayl7TKf",
    "id": 3117,
    "target": "lats",
    "instructions": "Attach the band to a fixed point above you, such as a pull-up bar or sturdy beam.\nSit down on a bench or chair facing the band, with your feet flat on the ground and your knees bent.\nGrasp the band with a close grip, palms facing towards you.\nKeep your back straight and engage your core.\nPull the band down towards your chest, squeezing your shoulder blades together.\nPause for a moment at the bottom of the movement, feeling the contraction in your lats.\nSlowly release the band back to the starting position, maintaining control throughout the movement.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/ZDBFczgu3KXZXO",
    "id": 3116,
    "target": "lats",
    "instructions": "Attach the band to a sturdy anchor point above your head.\nStand facing the anchor point with your feet shoulder-width apart.\nGrasp the band with an underhand grip, hands slightly wider than shoulder-width apart.\nStep back to create tension in the band, keeping your arms fully extended.\nEngage your core and squeeze your shoulder blades together.\nPull the band down towards your chest, leading with your elbows.\nPause for a moment at the bottom of the movement, feeling the contraction in your lats.\nSlowly release the tension in the band and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/lZUwVD0pbYCPvE",
    "id": 977,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold the band in front of your thighs with your palms facing down.\nKeep your arms straight and lift the band up in front of you until your arms are parallel to the ground.\nPause for a moment at the top, then slowly lower the band back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/QWFMrdo651iNQj",
    "id": 978,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold the band in front of your thighs with your palms facing down.\nKeep your arms straight and slowly raise them forward until they are parallel to the ground.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/Aw2H-yT51rK71h",
    "id": 1408,
    "target": "glutes",
    "instructions": "Lie on your back with your knees bent and feet flat on the ground.\nPlace a resistance band just above your knees.\nEngage your glutes and core muscles.\nPress your heels into the ground and lift your hips off the floor, squeezing your glutes at the top.\nPause for a moment at the top, then slowly lower your hips back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/x45EvaaVkJlzFu",
    "id": 979,
    "target": "abs",
    "instructions": "Attach the band to a sturdy anchor point at waist height.\nStand perpendicular to the anchor point with your feet shoulder-width apart.\nGrasp the band handle with both hands and step away from the anchor point to create tension in the band.\nBring your hands to your chest, keeping your elbows bent and close to your body.\nEngage your core and maintain a stable stance.\nExtend your arms straight out in front of you, pushing the band away from your body.\nHold the extended position for a few seconds, focusing on maintaining tension in your core.\nSlowly bring your hands back to your chest, resisting the pull of the band.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/Hsjfq20FDAEYd5",
    "id": 981,
    "target": "abs",
    "instructions": "Lie flat on your back with your legs straight and your arms extended overhead, holding the band.\nEngage your abs and lift your legs and upper body simultaneously, bringing your hands towards your feet.\nPause for a moment at the top, then slowly lower your legs and upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/66ueIPsBeGLHF4",
    "id": 983,
    "target": "lats",
    "instructions": "Attach the band to a sturdy anchor point above your head.\nKneel down and hold the band with one hand, palm facing down.\nExtend your arm fully overhead, keeping your elbow slightly bent.\nEngage your lat muscles and pull the band down towards your side, bringing your elbow towards your ribcage.\nPause for a moment at the bottom, then slowly release the tension and return to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/LVGnnhfCs4JwsV",
    "id": 985,
    "target": "abs",
    "instructions": "Attach the band to a sturdy anchor point at waist height.\nKneel down facing away from the anchor point and hold the band with both hands, keeping your elbows bent and close to your sides.\nEngage your abs and slowly twist your torso to one side, bringing your hands towards your opposite hip.\nPause for a moment, then slowly return to the starting position.\nRepeat on the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/RBt4-XMFYiJtnH",
    "id": 984,
    "target": "glutes",
    "instructions": "Lie on your back with your legs straight and a resistance band looped around your feet.\nBend your knees and bring them towards your chest, keeping your feet together.\nSlowly rotate your knees outwards, away from each other, while keeping your feet together.\nPause for a moment at the end of the rotation, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/k5US4hY3gHLZPo",
    "id": 1002,
    "target": "abs",
    "instructions": "Lie flat on your back with your legs straight and your feet together.\nPlace the band around the arches of your feet and hold the ends of the band with your hands.\nEngaging your abs, lift both legs off the ground until they are perpendicular to the floor.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/nMcuF-bxPSrq3V",
    "id": 986,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart and place one end of the band under your foot.\nHold the other end of the band with your arm fully extended overhead, palm facing forward.\nKeeping your upper arm stationary, curl your forearm towards your shoulder, squeezing your biceps.\nPause for a moment at the top, then slowly lower your forearm back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/Wjadydi7axz3wu",
    "id": 987,
    "target": "quads",
    "instructions": "Stand with your feet hip-width apart and place a resistance band around your ankles.\nExtend one leg forward and rest the top of your foot on a bench or step behind you.\nHold onto a support with one hand for balance.\nBend your standing leg and lower your body down into a squat position, keeping your knee in line with your toes.\nPush through your heel to return to the starting position.\nRepeat for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "back",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/r4vr5-YGSqKvOB",
    "id": 988,
    "target": "upper back",
    "instructions": "Attach the band to a stable anchor point at waist height.\nStand facing the anchor point with your feet shoulder-width apart.\nHold the band with one hand, palm facing inward, and step back to create tension in the band.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nPull the band towards your waist, squeezing your shoulder blades together.\nPause for a moment at the top of the movement, then slowly release the band back to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "chest",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/f9o5snYc6Qlvbe",
    "id": 989,
    "target": "pectorals",
    "instructions": "Attach the band to a sturdy anchor point at chest height.\nStand with your side facing the anchor point and grab the band with one hand.\nStep away from the anchor point to create tension in the band.\nPosition your feet shoulder-width apart and slightly bend your knees.\nBring your hand holding the band across your body, towards the opposite shoulder.\nWhile maintaining tension in the band, push your hand forward and away from your body, extending your arm.\nSlowly return to the starting position and repeat for the desired number of repetitions.\nSwitch sides and repeat the exercise with the other hand."
  },
  {
    "bodyPart": "back",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/HeWXbsF1XyUEII",
    "id": 990,
    "target": "upper back",
    "instructions": "Sit on a bench or chair with your feet flat on the ground and your back straight.\nHold the band with one hand and extend your arm fully in front of you.\nKeeping your back straight, pull the band towards your body by bending your elbow and squeezing your shoulder blades together.\nAt the same time, twist your torso towards the side of the pulling arm.\nPause for a moment at the top, then slowly release the tension in the band and return to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/JpLNFIl-i1OcQP",
    "id": 991,
    "target": "glutes",
    "instructions": "Attach a resistance band to a sturdy anchor point at ground level.\nStand facing away from the anchor point with your feet shoulder-width apart.\nStep forward to create tension in the band, keeping your knees slightly bent.\nHinge at the hips and push your glutes back, maintaining a slight bend in your knees.\nLower your torso until it is parallel to the ground, feeling a stretch in your hamstrings.\nDrive your hips forward and squeeze your glutes to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/EFE34hJ7K7SIUS",
    "id": 992,
    "target": "abs",
    "instructions": "Attach the band securely to a stable anchor point.\nLie flat on your back with your knees bent and feet flat on the ground.\nHold the band with both hands and extend your arms straight up towards the ceiling.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/Nls7g-pa7NWvNu",
    "id": 993,
    "target": "delts",
    "instructions": "Attach the band to a stationary object at chest height.\nStand with your feet shoulder-width apart and hold the band with both hands in front of you.\nKeep your arms straight and lift them out to the sides until they are parallel to the ground.\nSqueeze your shoulder blades together at the top of the movement.\nSlowly lower your arms back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/XGyl5Ro1ttM6GZ",
    "id": 994,
    "target": "forearms",
    "instructions": "Sit on a bench or chair with your feet flat on the ground.\nHold the band with an overhand grip, palms facing down, and wrap it around your fingers.\nRest your forearms on your thighs, with your wrists hanging off the edge.\nSlowly curl your wrists upward, squeezing your forearms.\nPause for a moment at the top, then slowly lower your wrists back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/kqRaQnYA-Pi-l2",
    "id": 996,
    "target": "glutes",
    "instructions": "Sit on a chair or bench with your back straight and feet flat on the ground.\nPlace a resistance band around your thighs, just above your knees.\nKeep your knees bent at a 90-degree angle and your feet shoulder-width apart.\nEngage your glutes and slowly rotate your knees outward, pushing against the resistance of the band.\nPause for a moment at the end of the movement, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/aRyXG1sZc1dCZT",
    "id": 1011,
    "target": "abs",
    "instructions": "Sit on the ground with your legs extended in front of you and your back straight.\nWrap the band around your waist and hold the ends with both hands.\nEngage your abs and slowly twist your torso to one side, keeping your back straight and your feet on the ground.\nPause for a moment at the end of the twist, then slowly return to the starting position.\nRepeat the twist to the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/ydWXGqNx-9DrPC",
    "id": 997,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and place the band under your feet.\nHold the band with your palms facing forward and raise your hands to shoulder height, elbows bent.\nPress the band overhead, fully extending your arms.\nPause for a moment at the top, then slowly lower the band back to shoulder height.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/xiuCNkiOG0RkNp",
    "id": 1018,
    "target": "traps",
    "instructions": "Stand with your feet shoulder-width apart and place the band under your feet, holding the ends with your hands.\nKeep your arms straight and relaxed, and let the band hang in front of your thighs.\nEngage your traps by shrugging your shoulders upward, lifting the band as high as possible.\nHold the contraction for a moment, then slowly lower your shoulders back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/Tt5fkpoBGUjpVB",
    "id": 998,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart and hold the band with both hands, palms facing down.\nExtend your arms straight out to the sides, keeping them parallel to the ground.\nSlowly bend your elbows and bring your hands towards your shoulders, keeping your upper arms still.\nPause for a moment, then slowly extend your arms back out to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/W3aNMq9qvtji9G",
    "id": 999,
    "target": "calves",
    "instructions": "Stand with your feet hip-width apart and place the band around the ball of your left foot.\nHold onto a stable object for balance if needed.\nSlowly raise your left heel off the ground, lifting your body weight onto the ball of your foot.\nPause for a moment at the top, then slowly lower your left heel back down to the starting position.\nRepeat for the desired number of repetitions, then switch to the right leg."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/yFFwD1ckM3qJrz",
    "id": 1000,
    "target": "calves",
    "instructions": "Stand with your feet hip-width apart and place the band around the ball of your foot.\nHold onto a stable object for balance.\nSlowly raise your heel off the ground, lifting your body weight onto the ball of your foot.\nPause for a moment at the top, then slowly lower your heel back down to the starting position.\nRepeat for the desired number of repetitions, then switch to the other leg."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/DLzJjxgKdyRnUs",
    "id": 1001,
    "target": "quads",
    "instructions": "Stand with your feet hip-width apart and place a resistance band around your ankles.\nTake a big step forward with your right foot and a smaller step back with your left foot.\nBend your knees and lower your body until your right thigh is parallel to the ground, keeping your left knee slightly above the ground.\nPush through your right heel to return to the starting position.\nRepeat on the other side."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/6PhYejZENOYDV3",
    "id": 1004,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, with the band placed just above your knees.\nKeeping your chest up and core engaged, push your hips back and bend your knees to lower into a squat position.\nMake sure your knees are tracking over your toes and your weight is in your heels.\nPause for a moment at the bottom, then push through your heels to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/T4kFKIObXBrylh",
    "id": 1003,
    "target": "glutes",
    "instructions": "Attach the band to a sturdy anchor point at waist height.\nStand facing the anchor point with your feet shoulder-width apart.\nHold the band handles with your palms facing each other and your arms extended in front of you.\nBend your knees and lower into a squat position, keeping your back straight and chest lifted.\nFrom the squat position, pull the band handles towards your body, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly release the tension and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/HerXrs9y7xrUkx",
    "id": 1005,
    "target": "abs",
    "instructions": "Attach the band to a sturdy anchor point at waist height.\nStand facing away from the anchor point with your feet shoulder-width apart.\nHold the band with both hands and bring it up to your chest, keeping your elbows bent and close to your body.\nEngage your abs and slowly crunch forward, bringing your chest towards your knees.\nPause for a moment at the top of the crunch, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/PVdQ9o5XUQLeJk",
    "id": 1022,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and place the band under your feet.\nHold the band handles with your palms facing each other and your arms extended in front of you.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nPull the band towards your chest, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly release the tension and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/EPTY54rRfKWiSA",
    "id": 1007,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart and place the band around your upper back, crossing it in front of your chest.\nHold the ends of the band with your hands, keeping your elbows bent and close to your sides.\nEngage your abs and twist your torso to one side, bringing your elbow towards the opposite knee.\nPause for a moment, then return to the starting position.\nRepeat on the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/FM5D8qYtpfZVVB",
    "id": 1008,
    "target": "glutes",
    "instructions": "Place a band around your thighs, just above your knees.\nStand facing a step or platform with your feet hip-width apart.\nStep up onto the platform with your right foot, pushing through your heel.\nExtend your left leg behind you, keeping it straight.\nLower your left foot back down to the ground.\nRepeat with your left foot stepping up onto the platform.\nContinue alternating legs for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/t1Cu6sfhEw7QLw",
    "id": 1009,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart and place the band around your ankles.\nHold the band with both hands in front of your thighs, palms facing your body.\nKeeping your back straight and your core engaged, hinge at the hips and slowly lower your upper body towards the ground.\nAs you lower, push your hips back and allow your knees to bend slightly.\nLower the band towards the ground, feeling a stretch in your hamstrings.\nPause for a moment at the bottom, then engage your glutes and hamstrings to lift your upper body back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/4fgvDrjJ79zcAK",
    "id": 1023,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart and place the band around your upper legs.\nHold the band with both hands in front of your thighs, palms facing your body.\nKeeping your back straight and your knees slightly bent, hinge at the hips and lower the band towards the ground.\nFeel the stretch in your hamstrings as you lower the band.\nEngage your glutes and hamstrings to lift your body back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/ozCGKVi2ILA-IV",
    "id": 1010,
    "target": "spine",
    "instructions": "Stand with your feet shoulder-width apart and place the band around your feet.\nHold the band with both hands, palms facing your body, and keep your arms straight.\nEngage your core and maintain a slight bend in your knees.\nSlowly hinge forward at your hips, keeping your back straight and chest lifted.\nLower the band towards the ground while keeping your legs straight.\nPause for a moment at the bottom, then squeeze your glutes and hamstrings to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/f7l3K2G8UXMjo7",
    "id": 1012,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and place the band under your feet.\nHold the band handles at shoulder height with your palms facing forward.\nEngage your core and press the band overhead, fully extending your arms.\nAs you press, twist your torso to one side, keeping your hips stable.\nPause for a moment at the top, then return to the starting position.\nRepeat the press and twist on the opposite side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/ABrhtu7JwuWpkB",
    "id": 1369,
    "target": "calves",
    "instructions": "Stand with your feet shoulder-width apart and place a resistance band under both feet.\nHold the ends of the band with your hands for stability.\nRaise your heels off the ground as high as possible, using your calves.\nPause for a moment at the top, then slowly lower your heels back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/E8kEnjhnbpKMq0",
    "id": 1013,
    "target": "lats",
    "instructions": "Attach the band to a high anchor point, such as a pull-up bar or sturdy beam.\nStand facing the anchor point with your feet shoulder-width apart.\nGrasp the band with an underhand grip, hands slightly wider than shoulder-width apart.\nExtend your arms fully overhead, keeping your elbows slightly bent.\nEngage your lats and pull the band down towards your chest, squeezing your shoulder blades together.\nPause for a moment at the bottom of the movement, then slowly release the tension and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/dERG8UIfN5NTde",
    "id": 1014,
    "target": "abs",
    "instructions": "Lie flat on your back with your legs straight and your arms extended overhead, holding the band.\nEngaging your abs, lift your legs and upper body off the ground simultaneously, reaching your hands towards your toes.\nPause for a moment at the top, then slowly lower your legs and upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/uJJNf6XMbW8433",
    "id": 1015,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart and wrap the band around a sturdy object at chest height.\nHold the band with both hands and step away from the anchor point, creating tension in the band.\nPosition yourself perpendicular to the anchor point, with your side facing the band.\nExtend your arms straight out in front of you, keeping your hands at chest height.\nEngage your core and press the band away from your chest, fully extending your arms.\nHold the position for a few seconds, then slowly bring the band back towards your chest.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/9iUWtV9SYvnFIE",
    "id": 1016,
    "target": "forearms",
    "instructions": "Sit on a bench or chair with your feet flat on the ground.\nHold the band with both hands, palms facing up, and rest your forearms on your thighs.\nSlowly curl your wrists upward, squeezing your forearms.\nPause for a moment at the top, then slowly lower your wrists back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "band",
    "gifUrl": "https://v2.exercisedb.io/image/ONY0EC7XdzswIX",
    "id": 1017,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold the band in front of your thighs with your palms facing inwards.\nKeep your arms straight and lift them up and out to the sides, forming a 'Y' shape with your body.\nSqueeze your shoulder blades together at the top of the movement.\nSlowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/d5j090W7PkaEYP",
    "id": 3212,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart and your arms by your sides.\nBend forward at the waist, keeping your back straight and your knees slightly bent.\nReach down towards your toes with your hands, keeping your legs as straight as possible.\nPause for a moment at the bottom, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/J884Je8m3Ajd5F",
    "id": 3360,
    "target": "cardiovascular system",
    "instructions": "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.\nLift your knees slightly off the ground, keeping your back flat and your core engaged.\nMove your right hand and left foot forward simultaneously, followed by your left hand and right foot.\nContinue crawling forward, alternating your hand and foot movements.\nMaintain a steady pace and keep your core tight throughout the exercise.\nContinue for the desired distance or time."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/WbQ7lqTUQu5kPP",
    "id": 129,
    "target": "triceps",
    "instructions": "Sit on the edge of a bench or chair with your hands gripping the edge next to your hips.\nSlide your butt off the bench and straighten your legs in front of you, keeping your heels on the ground.\nBend your elbows and lower your body towards the ground, keeping your back close to the bench.\nPause for a moment at the bottom, then push yourself back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/yBAIXjJ9iatwLC",
    "id": 1399,
    "target": "triceps",
    "instructions": "Sit on the edge of a bench or chair with your hands gripping the edge, fingers pointing forward.\nSlide your butt off the bench, supporting your weight with your hands.\nLower your body by bending your elbows until your upper arms are parallel to the floor.\nPush yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/qkXBjO4GR77gds",
    "id": 130,
    "target": "glutes",
    "instructions": "Sit on a bench with your back against the bench and your feet flat on the ground.\nPlace your hands on the bench for support.\nEngage your glutes and hamstrings, then lift your hips off the bench until your body forms a straight line from your knees to your shoulders.\nPause for a moment at the top, then slowly lower your hips back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/eVqvXUhA7EOut8",
    "id": 3019,
    "target": "lats",
    "instructions": "Position yourself under a bar or a sturdy horizontal surface that is at chest height.\nGrab the bar or surface with an overhand grip, slightly wider than shoulder-width apart.\nHang with your arms fully extended and your body straight.\nPull your chest towards the bar or surface by squeezing your shoulder blades together and bending your elbows.\nContinue pulling until your chin is above the bar or surface.\nLower yourself back down to the starting position with control.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/r1SCpN0FNYLUbB",
    "id": 3639,
    "target": "glutes",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nExtend your arms out to the sides, perpendicular to your body.\nKeeping your knees together, slowly lower them to one side, aiming to touch the ground with your knees.\nPause for a moment, then engage your core and slowly lift your knees back to the starting position.\nRepeat the movement to the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/-t4PAjEnkRKVH2",
    "id": 1770,
    "target": "biceps",
    "instructions": "Sit on a bench with your legs spread apart and your feet flat on the ground.\nHold a dumbbell in one hand and place your elbow on the inside of your thigh, just above the knee.\nWith your palm facing up, curl the dumbbell towards your shoulder while keeping your upper arm stationary.\nSqueeze your biceps at the top of the movement, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/YS3d4ykwHZbNaj",
    "id": 139,
    "target": "biceps",
    "instructions": "Hang from a pull-up bar with your palms facing towards you and your hands shoulder-width apart.\nEngage your core and pull yourself up towards the bar, focusing on using your biceps to lift your body.\nPause for a moment at the top, then slowly lower yourself back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/I0uxpkSUFqXVXr",
    "id": 140,
    "target": "biceps",
    "instructions": "Hang from a pull-up bar with your palms facing away from you and your hands shoulder-width apart.\nEngage your core and pull yourself up by bending your elbows, bringing your chest towards the bar.\nPause at the top of the movement, then slowly lower yourself back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/sAMb2JWkJTiiiC",
    "id": 137,
    "target": "triceps",
    "instructions": "Start by placing your hands on a raised surface, such as a bench or parallel bars, with your palms facing down and fingers pointing forward.\nExtend your legs out in front of you, keeping your heels on the ground and your body straight.\nLower your body by bending your elbows, keeping them close to your sides, until your upper arms are parallel to the ground.\nPause for a moment, then push through your palms to straighten your arms and lift your body back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ZL5c7rXKGhyYkP",
    "id": 3543,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart.\nLower your body into a squat position by bending your knees and pushing your hips back.\nJump up explosively, extending your hips, knees, and ankles.\nWhile in mid-air, quickly bring your feet together.\nLand softly on the balls of your feet and immediately drop back into a squat position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/LnY-DNdtpJ4PIt",
    "id": 3544,
    "target": "abs",
    "instructions": "Start by lying on your side with your legs extended and stacked on top of each other.\nPlace your forearm on the ground directly below your shoulder, with your elbow bent at a 90-degree angle.\nEngage your core and lift your hips off the ground, creating a straight line from your head to your feet.\nHold this position for the desired amount of time.\nLower your hips back down to the ground and repeat on the other side."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/skrSWIiwfLxNRn",
    "id": 1771,
    "target": "triceps",
    "instructions": "Kneel down on the ground with your knees hip-width apart.\nPlace your hands on the ground in front of you, shoulder-width apart, fingers pointing forward.\nExtend your legs straight behind you, balancing on your toes and hands, forming a straight line from head to heels.\nBend your elbows and lower your upper body towards the ground, keeping your elbows close to your sides.\nPause for a moment at the bottom, then push through your hands to straighten your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/XPG8xPP5qZYVGQ",
    "id": 1769,
    "target": "biceps",
    "instructions": "Lie on your side with your legs extended and your head supported by your arm.\nHold your upper arm against your side and bend your elbow to curl your forearm towards your shoulder.\nPause for a moment at the top, then slowly lower your forearm back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/q7bgnZhVpSUJIX",
    "id": 3168,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, holding onto a sturdy object or suspension trainer with your arms extended.\nLower your body into a squat position, keeping your back straight and your knees behind your toes.\nFrom the squat position, pull your body up towards the object or suspension trainer, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/wrDSSUToL8RZCM",
    "id": 3167,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, holding a towel in front of you with your palms facing down.\nBend your knees and lower your body into a squat position, keeping your back straight and your chest up.\nAs you lower into the squat, simultaneously pull the towel towards your chest, squeezing your shoulder blades together.\nPause for a moment at the bottom of the squat, then slowly return to the starting position while extending your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/PggvkurYefIcxy",
    "id": 1373,
    "target": "calves",
    "instructions": "Stand with your feet shoulder-width apart, toes pointing forward.\nPlace your hands on a wall or stable surface for balance.\nSlowly raise your heels off the ground, lifting your body weight onto the balls of your feet.\nPause for a moment at the top, then slowly lower your heels back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/BrdrSNfBBiLmdq",
    "id": 3156,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, knees slightly bent, and hold a dumbbell in one hand with a neutral grip.\nBend forward at the hips, keeping your back straight and your core engaged.\nPull the dumbbell up towards your chest, keeping your elbow close to your body and squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/0c9oOGRPjJN29v",
    "id": 3158,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart and knees slightly bent.\nBend forward at the waist, keeping your back straight and your core engaged.\nExtend your arms straight in front of you, gripping the bar or handles with a close grip.\nPull the bar or handles towards your body, squeezing your shoulder blades together.\nPause for a moment at the top of the movement, then slowly release and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/c7H49WHLOZT0IM",
    "id": 3162,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, knees slightly bent, and hold a dumbbell in one hand.\nBend forward at the hips, keeping your back straight and your core engaged.\nLet the dumbbell hang straight down in front of you, with your arm fully extended.\nPull the dumbbell up towards your chest, keeping your elbow close to your body.\nSqueeze your shoulder blades together at the top of the movement.\nLower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/4CSHbVXRjxroVG",
    "id": 3161,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, knees slightly bent, and hold a towel with one hand.\nBend forward at the hips, keeping your back straight and your core engaged.\nPull the towel towards your chest, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the towel back to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/mt0QGRWqxEVSOB",
    "id": 3166,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart and knees slightly bent.\nGrasp a bar or handles with an overhand grip, palms facing down.\nKeep your back straight and core engaged.\nPull the bar or handles towards your body, squeezing your shoulder blades together.\nPause for a moment at the top of the movement.\nSlowly release and extend your arms back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/LlJobSBz5GjVp4",
    "id": 3165,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart and hold a towel in front of you with both hands.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nPull the towel towards your chest, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly release the tension and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/2PLYZQdlvwibT5",
    "id": 138,
    "target": "abs",
    "instructions": "Lie flat on your back with your legs extended and your arms by your sides.\nBend your knees and bring them towards your chest, keeping your feet off the ground.\nEngaging your abs, lift your hips off the ground, bringing your knees towards your head.\nPause for a moment at the top, then slowly lower your hips back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/T-YSMARkGBJvQ4",
    "id": 1374,
    "target": "calves",
    "instructions": "Stand in front of a box or platform with your feet shoulder-width apart.\nBend your knees and jump onto the box, landing softly with one foot on the box and the other foot hanging off the edge.\nStabilize yourself on the box with the foot that is on it, while keeping the other foot off the ground.\nHold this position for a few seconds, engaging your calf muscles to maintain balance.\nSlowly step down with the foot that is on the box, returning to the starting position.\nRepeat the exercise with the other leg."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/rjv0Lh98NPcS9X",
    "id": 2466,
    "target": "abs",
    "instructions": "Start in a high plank position with your hands directly under your shoulders and your body in a straight line.\nEngage your core and lift your right foot off the ground, bringing your right knee towards your left elbow.\nReturn your right foot to the starting position and repeat the movement with your left foot towards your right elbow.\nContinue alternating sides, moving at a controlled pace.\nKeep your hips level and avoid lifting your hips too high or sagging them too low.\nMaintain a steady breathing pattern throughout the exercise.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/tlU4y3xe2sXfeM",
    "id": 1160,
    "target": "cardiovascular system",
    "instructions": "Start in a standing position with your feet shoulder-width apart.\nLower your body into a squat position by bending your knees and placing your hands on the floor in front of you.\nKick your feet back into a push-up position.\nPerform a push-up, keeping your body in a straight line.\nJump your feet back into the squat position.\nJump up explosively, reaching your arms overhead.\nLand softly and immediately lower back into a squat position to begin the next repetition."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/-uP64-966MSEuF",
    "id": 870,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands by your sides, palms facing down.\nEngaging your abs, lift your legs off the ground, bringing your knees towards your chest.\nAt the top of the movement, squeeze your abs and pause for a moment.\nSlowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/lNlWJicoafMKJm",
    "id": 1494,
    "target": "adductors",
    "instructions": "Sit on the floor with your legs extended in front of you.\nBend your knees and bring the soles of your feet together, allowing your knees to fall out to the sides.\nHold onto your ankles or feet with your hands.\nSit up tall and lengthen your spine.\nGently press your knees down towards the floor, feeling a stretch in your inner thighs.\nHold this position for a few breaths.\nTo release, slowly bring your knees back up and extend your legs."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/6BOM5aLCAXGEWH",
    "id": 1407,
    "target": "calves",
    "instructions": "Stand facing a wall with your feet hip-width apart.\nPlace your hands against the wall at shoulder height.\nStep back with one foot, keeping your heel on the ground and your leg straight.\nBend your front knee slightly and lean forward, feeling a stretch in your calf.\nHold the stretch for 20-30 seconds.\nSwitch legs and repeat the stretch."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/3bkxEYXGpYs4Sf",
    "id": 1377,
    "target": "calves",
    "instructions": "Stand facing a wall with your feet hip-width apart.\nPlace your hands against the wall at shoulder height.\nStep your right foot back, keeping your heel on the ground and your leg straight.\nBend your left knee and lean forward, keeping your back leg straight and your heel on the ground.\nHold the stretch for 20-30 seconds.\nSwitch legs and repeat the stretch."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/xP7WHyU-iNwpCu",
    "id": 2963,
    "target": "abs",
    "instructions": "Sit on the captain's chair with your back against the backrest and your forearms resting on the arm pads.\nKeep your upper body stable and your back straight.\nEngage your abs and lift your legs up in front of you, keeping them straight.\nContinue lifting until your legs are parallel to the ground or as high as you can comfortably go.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/tpLhtsE2XArNdH",
    "id": 1548,
    "target": "quads",
    "instructions": "Sit on the edge of a chair with your back straight and feet flat on the ground.\nExtend one leg straight out in front of you, keeping your heel on the ground.\nLean forward slightly, feeling a stretch in your quadriceps.\nHold this position for 20-30 seconds.\nSwitch legs and repeat the stretch."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/nMMozdOxOkPCkM",
    "id": 1271,
    "target": "pectorals",
    "instructions": "Stand tall with your feet shoulder-width apart.\nExtend your arms straight out in front of you at shoulder height.\nCross your arms in front of your body, with your right arm on top of your left arm.\nInterlace your fingers and press your palms together.\nGently squeeze your shoulder blades together and push your hands forward, feeling a stretch in your chest and front of your shoulders.\nHold the stretch for 20-30 seconds, then release.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/8rwHNSy2aThXmJ",
    "id": 251,
    "target": "pectorals",
    "instructions": "Position yourself on parallel bars with your arms fully extended and your body straight.\nLower your body by bending your elbows until your shoulders are below your elbows.\nPush yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/G2bt5wDKCV8SFz",
    "id": 1430,
    "target": "pectorals",
    "instructions": "Adjust the dip bars to a height that allows you to comfortably grip them.\nStand between the bars and place your hands on each bar, slightly wider than shoulder-width apart.\nJump up and straighten your arms, supporting your body weight on the bars.\nBend your knees and cross your ankles behind you.\nLower your body by bending your elbows, keeping your chest up and your shoulders down.\nContinue lowering until your shoulders are below your elbows or until you feel a stretch in your chest.\nPush through your palms and extend your elbows to raise your body back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/VbsnCmslxBvFNN",
    "id": 2462,
    "target": "pectorals",
    "instructions": "Grab the parallel bars with your palms facing down and your arms fully extended.\nBend your knees and cross your ankles.\nLower your body by bending your arms until your shoulders are below your elbows.\nPush yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/RbL0INHfshVjUg",
    "id": 1272,
    "target": "pectorals",
    "instructions": "Sit on the stability ball with your feet flat on the ground and your back straight.\nHold the exercise ball with both hands and extend your arms straight out in front of you.\nSlowly bring the exercise ball towards your chest, feeling a stretch in your chest muscles.\nHold the stretch for a few seconds, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/nknYp9pS1xlw-H",
    "id": 3216,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands slightly wider than shoulder-width apart and your body in a straight line.\nLower your body towards the ground by bending your elbows, keeping them close to your sides.\nAs you lower yourself, tap your chest with your right hand.\nPush yourself back up to the starting position.\nRepeat the movement, this time tapping your chest with your left hand.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/NQbEK5l6wjdcey",
    "id": 1326,
    "target": "lats",
    "instructions": "Hang from a pull-up bar with your palms facing towards you and your hands shoulder-width apart.\nEngage your core and pull your body up towards the bar, leading with your chest.\nContinue pulling until your chin is above the bar.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/qhvun2WQLmKIgJ",
    "id": 253,
    "target": "upper back",
    "instructions": "Hang from a pull-up bar with a narrow parallel grip, palms facing towards you.\nEngage your back muscles and pull your body up towards the bar, keeping your elbows close to your body.\nContinue pulling until your chin is above the bar.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/n8EBGnq18CaF1W",
    "id": 257,
    "target": "calves",
    "instructions": "Stand with your feet shoulder-width apart and your hands on your hips.\nBend your knees slightly and lift your heels off the ground, balancing on the balls of your feet.\nKeeping your knees bent, rotate your knees in a circular motion, first clockwise and then counterclockwise.\nPerform the movement for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/N7Rl9GhnsoCkMV",
    "id": 1273,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands slightly wider than shoulder-width apart.\nLower your body towards the ground by bending your elbows, keeping your core engaged.\nPush through your palms explosively to propel your body off the ground.\nWhile in mid-air, clap your hands together before landing back in the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/mErQ1zPGmaxh13",
    "id": 258,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands directly under your shoulders and your body in a straight line.\nLower your body towards the ground by bending your elbows, keeping them close to your sides.\nAs you lower, rotate your body to the left, extending your left arm straight out to the side.\nPush back up to the starting position, while rotating your body to the center.\nRepeat the push-up, this time rotating your body to the right and extending your right arm out to the side.\nContinue alternating sides with each repetition."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/yA9lcWiwoLpqrI",
    "id": 1327,
    "target": "lats",
    "instructions": "Grab the pull-up bar with your palms facing towards you and your hands shoulder-width apart.\nHang from the bar with your arms fully extended and your feet off the ground.\nEngage your back muscles and pull your body up towards the bar, keeping your elbows close to your body.\nContinue pulling until your chin is above the bar.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/e4JJvN7cFkSGc6",
    "id": 259,
    "target": "triceps",
    "instructions": "Start in a high plank position with your hands placed close together, directly under your shoulders.\nEngage your core and lower your body towards the ground, keeping your elbows close to your sides.\nPush through your palms to extend your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/0oK1C6-2QMDzDv",
    "id": 2398,
    "target": "triceps",
    "instructions": "Start by getting on your hands and knees, with your hands shoulder-width apart and your knees hip-width apart.\nLower your upper body towards the ground by bending your elbows, keeping them close to your sides.\nPause for a moment when your chest is just above the ground.\nPush through your palms to straighten your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/zUJOW5nR6EUZ9A",
    "id": 260,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/WINjKkHGU69v5r",
    "id": 1468,
    "target": "abs",
    "instructions": "Start by sitting on the ground with your knees bent and feet flat on the floor.\nPlace your hands behind you, fingers pointing towards your feet, and lift your hips off the ground.\nExtend one leg straight out in front of you while simultaneously reaching your opposite hand towards your toes.\nReturn to the starting position and repeat on the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/BoYjwGssKYHAfn",
    "id": 262,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, lift your upper body off the ground and twist to bring your right elbow towards your left knee.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat on the other side, bringing your left elbow towards your right knee.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/2Fy1JPVGy-0T8i",
    "id": 267,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nExtend your arms straight above your head.\nEngaging your abs, lift your upper body off the ground, curling forward towards your knees.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/nVD33F0tBF5az5",
    "id": 271,
    "target": "abs",
    "instructions": "Sit on the stability ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nLie back on the ball until your lower back is supported and your upper body is parallel to the floor.\nPlace your hands behind your head or across your chest.\nEngage your abs and lift your upper body towards your knees, curling your torso forward.\nPause for a moment at the top of the movement, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/y-g64Or1jXBPj0",
    "id": 272,
    "target": "abs",
    "instructions": "Sit on the stability ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nLie back on the ball until your lower back is supported and your upper body is parallel to the floor.\nPlace your hands behind your head or cross them over your chest.\nEngage your abs and lift your upper body off the ball, curling your shoulders towards your hips.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/TnyMUKpBnfcAfv",
    "id": 274,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngage your abs and lift your shoulders off the ground, curling forward towards your knees.\nPause for a moment at the top, then slowly lower your shoulders back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/xNsvA5Fp2jK7Di",
    "id": 3016,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/JIYVQ4I0Qi2eBm",
    "id": 3769,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart.\nTake a step diagonally behind and across your body with your right foot, crossing it behind your left leg.\nBend both knees as if you were curtsying, lowering your body towards the ground.\nKeep your torso upright and your weight on your front foot.\nPush through your front foot to return to the starting position.\nRepeat on the other side, stepping diagonally behind and across your body with your left foot."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/6OnqLJChzxx3Vo",
    "id": 276,
    "target": "abs",
    "instructions": "Lie flat on your back with your arms extended towards the ceiling.\nBend your knees and lift your legs off the ground, creating a 90-degree angle at your hips and knees.\nEngage your core and lower back to press your lower back into the ground.\nSlowly lower your right arm and left leg towards the ground, keeping them straight and hovering just above the floor.\nPause for a moment, then return to the starting position.\nRepeat the movement with your left arm and right leg.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/6vtIvegrMLfyxM",
    "id": 277,
    "target": "abs",
    "instructions": "Lie on a decline bench with your feet secured and your knees bent at a 90-degree angle.\nPlace your hands behind your head or across your chest.\nEngage your abs and lift your upper body towards your knees, curling your torso.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/qTUc9uMBX2gyCi",
    "id": 279,
    "target": "pectorals",
    "instructions": "Place your hands on the ground slightly wider than shoulder-width apart, with your feet elevated on a stable surface.\nKeep your body in a straight line from head to toe, engaging your core muscles.\nLower your chest towards the ground by bending your elbows, keeping them close to your body.\nPush through your palms to extend your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/1lNbGtF3bfA-Yk",
    "id": 282,
    "target": "abs",
    "instructions": "Lie on a decline bench with your feet secured and your knees bent.\nPlace your hands behind your head or across your chest.\nEngage your abs and lift your upper body off the bench, curling forward towards your knees.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/XAir-tmxB8Ky3W",
    "id": 1274,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands slightly wider than shoulder-width apart and your body in a straight line.\nLower your chest towards the ground by bending your elbows, keeping them close to your body.\nPush through your palms to extend your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/yhj27X9TExba4U",
    "id": 283,
    "target": "triceps",
    "instructions": "Start in a high plank position with your hands close together, forming a diamond shape with your thumbs and index fingers.\nKeep your body in a straight line from head to toe, engaging your core and glutes.\nLower your chest towards the diamond shape formed by your hands, keeping your elbows close to your body.\nPause for a moment at the bottom, then push yourself back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/rZOajyzUqZz2AT",
    "id": 284,
    "target": "calves",
    "instructions": "Stand with your toes on an elevated surface, such as a step or block.\nPlace your hands on a stable support, such as a wall or railing, for balance.\nRaise your heels as high as possible, lifting your body weight onto the balls of your feet.\nPause for a moment at the top, then slowly lower your heels back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Eg6vmcS7hVF2Rn",
    "id": 1275,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands slightly wider than shoulder-width apart.\nLower your chest towards the ground, keeping your elbows close to your body.\nOnce your chest is just above the ground, quickly drop your knees to the ground.\nPush yourself back up to the starting position by extending your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/lqGKEl7oKJ7mAN",
    "id": 285,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing forward and arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions, alternating arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/6siW0fEBHBXNF4",
    "id": 2403,
    "target": "biceps",
    "instructions": "Stand up straight with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing forward.\nPlace the arm blaster on your upper arms, ensuring a secure fit.\nKeeping your upper arms stationary, exhale and curl one dumbbell up towards your shoulder while contracting your biceps.\nContinue to raise the dumbbell until your biceps are fully contracted and the dumbbell is at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat the movement with the opposite arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/UHUyK7eFsmv2nE",
    "id": 1646,
    "target": "biceps",
    "instructions": "Sit on a preacher bench with a dumbbell in each hand, palms facing your torso and arms fully extended.\nKeep your upper arms stationary and exhale as you curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the recommended amount of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/C0BhksDVkavQup",
    "id": 1647,
    "target": "biceps",
    "instructions": "Sit on a preacher bench with a dumbbell in each hand, palms facing up.\nRest your upper arms on the pad of the preacher bench, allowing your arms to fully extend.\nKeeping your upper arms stationary, exhale and curl the dumbbell in your right hand as you contract your biceps.\nContinue to curl the dumbbell until your biceps are fully contracted and the dumbbell is at shoulder level.\nPause for a moment, then inhale and slowly lower the dumbbell back to the starting position.\nRepeat the movement with your left arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/JOQ8N9IVWr6vmU",
    "id": 1648,
    "target": "biceps",
    "instructions": "Sit on a bench with a dumbbell in each hand, palms facing your torso and arms extended down.\nKeep your back straight and your elbows close to your torso.\nExhale and curl the dumbbell in your right hand towards your shoulder, keeping your upper arm stationary.\nContinue to raise the dumbbell until your biceps are fully contracted and the dumbbell is at shoulder level.\nPause for a brief moment, then inhale and slowly lower the dumbbell back to the starting position.\nRepeat the movement with your left arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/vuVl5wSTI2jhZQ",
    "id": 286,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder height.\nPress one dumbbell overhead while keeping the other dumbbell at shoulder height.\nLower the pressed dumbbell back to shoulder height while pressing the other dumbbell overhead.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ks1aFjTcO-nWFp",
    "id": 1649,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing forward.\nPlace an exercise ball behind you and position one foot on top of it, keeping your balance.\nWith your arms fully extended and elbows close to your sides, curl one dumbbell towards your shoulder while keeping your upper arm stationary.\nLower the dumbbell back down to the starting position and repeat with the other arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/BWAYF4iXZmeNjt",
    "id": 1650,
    "target": "biceps",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your back straight.\nHold a dumbbell in each hand with your palms facing forward and your arms fully extended.\nKeeping your upper arms stationary, exhale and curl one dumbbell while rotating your forearm until your palm is facing your shoulder.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat the curl with the other arm.\nContinue alternating curls for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/0D6E6Vk4fYsQOr",
    "id": 2137,
    "target": "delts",
    "instructions": "Sit on a bench with back support and hold a dumbbell in each hand at shoulder level, palms facing your body and elbows bent.\nPress the dumbbells upward until your arms are fully extended and your palms are facing forward.\nRotate your wrists as you lift, so that your palms are facing forward at the top of the movement.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/bwSTANG8ChTHq5",
    "id": 287,
    "target": "delts",
    "instructions": "Sit on a bench with back support and hold a dumbbell in each hand at shoulder level, palms facing your body and elbows bent.\nPress the dumbbells upward until your arms are fully extended and your palms are facing forward.\nRotate your wrists as you lift, so that your palms end up facing forward at the top of the movement.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/k2Ika7RWlu7n9t",
    "id": 288,
    "target": "pectorals",
    "instructions": "Lie flat on a bench with your head at one end and your feet firmly on the ground.\nHold a dumbbell with both hands and extend your arms straight above your chest.\nKeeping your arms straight, slowly lower the dumbbell behind your head in an arc motion.\nPause for a moment at the bottom, then raise the dumbbell back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/-POBYlMeeMddeh",
    "id": 289,
    "target": "pectorals",
    "instructions": "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.\nHold a dumbbell in each hand, with your palms facing forward and your arms extended above your chest.\nLower the dumbbells slowly to the sides of your chest, keeping your elbows at a 90-degree angle.\nPause for a moment, then push the dumbbells back up to the starting position, fully extending your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/tqvBIAoOJvh37C",
    "id": 290,
    "target": "delts",
    "instructions": "Sit on a bench with a dumbbell in each hand, resting on your thighs.\nLean back and position the dumbbells to the sides of your chest, palms facing forward.\nPress the dumbbells upward until your arms are fully extended.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/7Mos6oADMjAJ7e",
    "id": 291,
    "target": "glutes",
    "instructions": "Place a dumbbell on the ground in front of a bench.\nStand facing away from the bench with your feet shoulder-width apart.\nBend at the knees and hips to lower yourself down towards the bench, keeping your chest up and back straight.\nOnce your glutes touch the bench, push through your heels to stand back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ppKLWSX743x27c",
    "id": 293,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, knees slightly bent, and hold a dumbbell in each hand with your palms facing your body.\nBend forward at the hips, keeping your back straight and your core engaged.\nLet your arms hang straight down towards the floor, with your elbows slightly bent.\nPull the dumbbells up towards your chest, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/7FdxTo1fex7E8j",
    "id": 1651,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing forward.\nTake a step forward with your right foot, bending your right knee and lowering your body into a lunge position.\nAs you lunge forward, curl the dumbbells up towards your shoulders, keeping your elbows close to your body.\nAt the bottom of the lunge, rotate your torso to the right, as if you were bowling a ball.\nReverse the motion, stepping back with your right foot and returning to the starting position while lowering the dumbbells back down.\nRepeat the lunge and curl motion, this time rotating your torso to the left.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/yYpk0YoAJszbkb",
    "id": 1652,
    "target": "biceps",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your back straight.\nHold a dumbbell in each hand with your palms facing forward and your arms fully extended.\nSlowly curl the dumbbells towards your shoulders, keeping your elbows close to your sides.\nPause for a moment at the top of the movement, then slowly lower the dumbbells back to the starting position.\nWhile performing the bicep curl, raise one leg off the ground and hold it in the air for the duration of the exercise.\nRepeat for the desired number of repetitions, then switch legs and repeat."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/EQ6FcJlfCHK1yg",
    "id": 1653,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing forward.\nExtend one leg behind you, balancing on the toes of that foot.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions, then switch legs and repeat."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/y6yknszPn5VM8E",
    "id": 294,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing forward and arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/0lX9y87IUWnxQu",
    "id": 2401,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing forward.\nKeep your elbows close to your torso and your upper arms stationary.\nExhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/BWqYzNdSwAA071",
    "id": 1654,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing down and arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/wbGZ7bSdgwfmQM",
    "id": 1655,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing forward.\nKeeping your back straight and your elbows close to your sides, exhale and curl the dumbbells up towards your shoulders.\nPause for a moment at the top, squeezing your biceps.\nInhale and slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/PIscQL1dBGCIu3",
    "id": 1656,
    "target": "biceps",
    "instructions": "Sit on a bosu ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nHold a dumbbell in each hand with your palms facing forward and your arms fully extended down by your sides.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/y3TZl0bZuTv2rO",
    "id": 1201,
    "target": "cardiovascular system",
    "instructions": "Start in a standing position with your feet shoulder-width apart and a dumbbell in each hand.\nLower your body into a squat position, placing the dumbbells on the ground in front of you.\nKick your feet back into a push-up position, keeping your body in a straight line.\nPerform a push-up, bending your elbows and lowering your chest towards the ground.\nJump your feet back towards your hands, landing in a squat position.\nStand up explosively, lifting the dumbbells off the ground and bringing them to your shoulders.\nPress the dumbbells overhead, fully extending your arms.\nLower the dumbbells back to your shoulders and repeat the entire sequence for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/jzQUrsbGWVKG54",
    "id": 295,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with an overhand grip.\nBend your knees and lower your hips into a squat position, keeping your back straight and chest up.\nExplosively extend your hips and knees, driving through your heels to jump off the ground.\nAs you jump, shrug your shoulders and pull the dumbbells up towards your shoulders, keeping them close to your body.\nCatch the dumbbells at shoulder height, with your elbows pointing forward and your palms facing up.\nLower the dumbbells back down to the starting position by reversing the movement.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/I5UrPzc60q3AwJ",
    "id": 1731,
    "target": "triceps",
    "instructions": "Sit on a flat bench with a dumbbell in each hand, resting on your thighs.\nUsing your thighs to help raise the dumbbells, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width.\nOnce at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position.\nAs you breathe in, slowly lower the dumbbells to your side until they are about level with your chest.\nAs you exhale, use your triceps to lift the dumbbells back to the starting position. Make sure to use only your triceps and do not use your forearms or biceps to help lift the dumbbells.\nAfter a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/NpiotF2whiLPsS",
    "id": 296,
    "target": "triceps",
    "instructions": "Sit on a flat bench with a dumbbell in each hand, resting on your thighs.\nUsing your thighs to help raise the dumbbells, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width.\nOnce at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position.\nAs you breathe in, slowly lower the dumbbells to your side until they are about level with your chest.\nAs you exhale, use your triceps to lift the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/WYHnWpgwhGHKf0",
    "id": 297,
    "target": "biceps",
    "instructions": "Sit on a bench with your legs spread apart and a dumbbell in one hand, resting your elbow on the inside of your thigh.\nFully extend your arm and hold the dumbbell with an underhand grip.\nKeeping your upper arm stationary, exhale and curl the weight up towards your shoulder while contracting your biceps.\nContinue to raise the dumbbell until your biceps are fully contracted and the dumbbell is at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/43-pu6-l4bmdi1",
    "id": 3635,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.\nTake a step forward with your right foot, keeping your back straight and core engaged.\nLower your body by bending both knees until your right thigh is parallel to the ground.\nPush through your right heel to return to the starting position.\nRepeat with your left leg.\nAlternate legs for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/zhSpOwuPHG8pbY",
    "id": 298,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your body.\nKeep your elbows close to your torso and your upper arms stationary.\nExhale and curl the weights while contracting your biceps, bringing the dumbbells across your body towards your opposite shoulder.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/RBDb5wHguUB14T",
    "id": 1657,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your body.\nKeep your elbows close to your torso and your upper arms stationary.\nExhale and curl the weights while contracting your biceps, bringing the dumbbells as close to your opposite shoulder as possible.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/CbG24PB9P6RhLI",
    "id": 299,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder height with your palms facing down.\nKeeping your core engaged and your elbows slightly bent, press the dumbbells up and overhead until your arms are fully extended.\nRotate your wrists so that your palms are facing forward.\nSlowly lower the dumbbells back to the starting position, rotating your wrists back to the starting position as you do so.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/6fC-zXTA0J-rnV",
    "id": 2136,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder height with your palms facing down.\nKeeping your core engaged and your back straight, press the dumbbells straight up overhead until your arms are fully extended.\nRotate your wrists so that your palms are facing forward.\nLower the dumbbells back down to shoulder height, rotating your wrists back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Fh6fhmvDdYm6g0",
    "id": 300,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, toes pointing forward.\nHold a dumbbell in each hand, palms facing your body, arms extended downwards.\nBend at your hips and knees, lowering the dumbbells towards the ground while keeping your back straight.\nPush through your heels and extend your hips and knees, lifting the dumbbells back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/1nGgfRsmigdFMS",
    "id": 301,
    "target": "pectorals",
    "instructions": "Lie down on a decline bench with your feet secured and your head lower than your hips.\nHold a dumbbell in each hand and extend your arms straight up above your chest, palms facing forward.\nLower the dumbbells slowly to the sides of your chest, keeping your elbows at a 90-degree angle.\nPush the dumbbells back up to the starting position, fully extending your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/5eOJNk8uWykoSe",
    "id": 302,
    "target": "pectorals",
    "instructions": "Lie on a decline bench with your feet secured and your head lower than your hips.\nHold a dumbbell in each hand with your palms facing each other and your arms extended above your chest.\nLower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest.\nPause for a moment, then squeeze your chest muscles to bring the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/zSWBYKdMjVIylF",
    "id": 303,
    "target": "pectorals",
    "instructions": "Lie on a decline bench with your feet secured and your head lower than your hips.\nHold a dumbbell in each hand with your palms facing each other and your arms extended above your chest.\nLower the dumbbells to the sides of your chest, keeping your elbows slightly bent.\nPress the dumbbells back up to the starting position, fully extending your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/bJy-NHWAaGo1uN",
    "id": 1276,
    "target": "pectorals",
    "instructions": "Lie down on a decline bench with a dumbbell in one hand, resting it on your thigh.\nUsing your thigh to help raise the dumbbell, lift it up to shoulder width with your palm facing your torso.\nRotate your wrist so that the palm of your hand is facing forward.\nAs you breathe in, lower the dumbbell slowly to the side until you feel a stretch in your chest.\nExhale and use your chest muscles to bring the dumbbell back up to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/XmpKJnPtcagrXv",
    "id": 1617,
    "target": "triceps",
    "instructions": "Lie on a decline bench with a dumbbell in one hand, resting on your chest.\nExtend your arm straight up, keeping your elbow slightly bent.\nLower the dumbbell down towards your shoulder, keeping your elbow close to your body.\nPress the dumbbell back up to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/2qu2sP70KUE4dA",
    "id": 305,
    "target": "traps",
    "instructions": "Set up a decline bench at a 45-degree angle.\nLie face down on the bench with your chest and stomach resting against it.\nHold a dumbbell in each hand with your arms fully extended towards the floor.\nKeeping your arms straight, raise your shoulders towards your ears as high as possible.\nHold the contraction for a moment, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/NkhdAesjWRkqh6",
    "id": 304,
    "target": "traps",
    "instructions": "Set up a decline bench at a 45-degree angle.\nLie face down on the bench with your chest and stomach resting on it.\nHold a dumbbell in each hand with your palms facing each other and your arms fully extended.\nKeeping your arms straight, raise your shoulders as high as possible while squeezing your shoulder blades together.\nHold the contraction for a brief pause, then lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/jQ-ufx4KJSXIwb",
    "id": 306,
    "target": "triceps",
    "instructions": "Lie on a decline bench with your head lower than your feet and hold a dumbbell in each hand, palms facing each other.\nExtend your arms fully, keeping your elbows close to your head.\nLower the dumbbells slowly behind your head, bending your elbows.\nPause for a moment, then raise the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/vOExzRg-EhyqLM",
    "id": 307,
    "target": "pectorals",
    "instructions": "Lie down on a decline bench with your head lower than your hips.\nHold a dumbbell in each hand with your palms facing each other and your arms extended straight up over your chest.\nLower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest.\nAs you lower the dumbbells, twist your wrists so that your palms face forward at the bottom of the movement.\nReverse the motion and bring the dumbbells back up to the starting position, squeezing your chest muscles at the top.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/98ULj0HHG6oE9f",
    "id": 1437,
    "target": "forearms",
    "instructions": "Sit on a bench or chair with your feet flat on the ground and your back straight.\nHold a dumbbell in one hand with an underhand grip, resting your forearm on your thigh, palm facing up.\nAllow the dumbbell to roll down to your fingertips, then curl it back up by flexing your fingers.\nRepeat for the desired number of repetitions, then switch to the other hand."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/GgFxnOkqt4VZSH",
    "id": 308,
    "target": "pectorals",
    "instructions": "Lie flat on a bench with a dumbbell in each hand, palms facing each other.\nExtend your arms straight up over your chest, with a slight bend in your elbows.\nKeeping a slight bend in your elbows, lower your arms out to the sides in a wide arc until you feel a stretch in your chest.\nPause for a moment, then reverse the movement and bring the dumbbells back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/wEz4iNCBQnYRNM",
    "id": 1277,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball and hold a dumbbell in each hand.\nWalk your feet forward and roll your body down until your head, neck, and upper back are supported by the ball.\nExtend your arms straight up above your chest, palms facing each other.\nBend your elbows slightly and lower your arms out to the sides in a wide arc until you feel a stretch in your chest.\nPause for a moment, then reverse the movement and squeeze your chest muscles as you bring the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/vWCr0WdNma7eie",
    "id": 1732,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.\nTake a step forward with your right foot, lowering your body into a lunge position.\nKeep your back straight and your chest up.\nExtend your arms straight overhead, keeping your elbows close to your ears.\nLower the dumbbells behind your head by bending your elbows.\nPause for a moment, then straighten your arms to return to the starting position.\nRepeat the movement for the desired number of repetitions, then switch legs and repeat."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/OzqUpYKX7EXCqB",
    "id": 310,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing your thighs.\nKeeping your arms straight, exhale and lift the dumbbells in front of you until they are at shoulder level.\nPause for a moment at the top, then inhale and slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/EQFHSypghAr3Pe",
    "id": 309,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing your thighs.\nKeep your back straight and engage your core.\nSlowly lift the dumbbells in front of you, with your arms straight, until they are at shoulder level.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/7bDp0CGx76qJrG",
    "id": 311,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing your body.\nKeep your back straight and engage your core.\nRaise your arms out to the sides, keeping a slight bend in your elbows, until they are parallel to the ground.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/9Ll4mUEKcbeA1m",
    "id": 1760,
    "target": "quads",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell vertically against your chest with both hands.\nKeeping your chest up and core engaged, lower your body down into a squat position by pushing your hips back and bending your knees.\nContinue lowering until your thighs are parallel to the ground, or as low as you can comfortably go.\nPause for a moment at the bottom, then push through your heels to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ThHUhYWFU8A8GP",
    "id": 313,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your torso.\nKeep your elbows close to your torso and rotate the palms of your hands until they are facing forward.\nThis will be your starting position.\nNow, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nThen, inhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the recommended amount of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/BrceAlyhlRgLxH",
    "id": 1659,
    "target": "biceps",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your back straight.\nHold a dumbbell in each hand with your palms facing your body and your arms fully extended.\nKeeping your upper arms stationary, exhale and curl the dumbbells while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/4Glc3dSlMnoOMs",
    "id": 312,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your torso.\nKeep your elbows close to your torso and rotate the palms of your hands until they are facing forward.\nThis will be your starting position.\nNow, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nThen, inhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the recommended amount of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/e4x2RJc1og-UG4",
    "id": 2402,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your torso.\nKeep your elbows close to your torso and rotate the palms of your hands until they are facing forward.\nThis will be your starting position.\nNow, while holding your upper arm stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nThen, inhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the recommended amount of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/63APprkiSbVhqb",
    "id": 1664,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing forward.\nKeep your upper arms stationary and curl the dumbbells as high as possible while contracting your biceps.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/yp2lI1WhkNbjCA",
    "id": 3545,
    "target": "pectorals",
    "instructions": "Sit on an incline bench with a dumbbell in each hand, resting on your thighs.\nLean back on the bench and use your thighs to help raise the dumbbells to shoulder height, palms facing forward.\nOnce at shoulder height, rotate your wrists so that the palms of your hands are facing forward.\nPush the dumbbells up with your chest and shoulders, extending your arms fully.\nLower the dumbbells back down to the starting position, keeping your elbows slightly bent.\nRepeat for the desired number of repetitions, alternating arms."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/nOLxAi1BXuJXX1",
    "id": 314,
    "target": "pectorals",
    "instructions": "Set up an incline bench at a 45-degree angle.\nSit on the bench with your feet flat on the ground and your back pressed firmly against the bench.\nHold a dumbbell in each hand, palms facing forward, and lift them to shoulder height.\nSlowly lower the dumbbells to the sides of your chest, keeping your elbows at a 90-degree angle.\nPush the dumbbells back up to the starting position, fully extending your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/LKZA3h6JQTl7tp",
    "id": 315,
    "target": "biceps",
    "instructions": "Sit on an incline bench with a dumbbell in each hand, palms facing forward, and arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/zEHoKNeoPNqh5J",
    "id": 316,
    "target": "pectorals",
    "instructions": "Set up an incline bench at a 45-degree angle.\nSit on the bench with your back against the pad and feet flat on the ground.\nHold a dumbbell in each hand with an overhand grip, palms facing forward.\nStart with your arms fully extended, perpendicular to the ground.\nLower the dumbbells slowly to the sides of your chest, keeping your elbows at a 90-degree angle.\nPause for a moment at the bottom, then push the dumbbells back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/LtqouiyAB13Lwc",
    "id": 318,
    "target": "biceps",
    "instructions": "Set an incline bench to a 45-degree angle and sit on it with a dumbbell in each hand, palms facing forward.\nRest your upper arms on the incline bench and let your elbows hang down, fully extending your arms.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/bBJyOseA-B-TNM",
    "id": 317,
    "target": "biceps",
    "instructions": "Sit on an incline bench with a dumbbell in each hand, palms facing forward and arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/FBnhFNPrn0Qqup",
    "id": 319,
    "target": "pectorals",
    "instructions": "Set an incline bench to a 45-degree angle.\nSit on the bench with a dumbbell in each hand, palms facing each other.\nLie back on the bench and press the dumbbells up to the starting position, directly above your chest.\nLower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest.\nPause for a moment, then squeeze your chest muscles to bring the dumbbells back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ppWxc0rsh030Ms",
    "id": 1278,
    "target": "pectorals",
    "instructions": "Set up an incline bench at a 45-degree angle.\nSit on an exercise ball and roll forward until your upper back is resting on the incline bench.\nHold a dumbbell in each hand with your palms facing each other and your arms extended above your chest.\nLower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest.\nPause for a moment, then squeeze your chest muscles to bring the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/KPTV1B4YZV-RzD",
    "id": 320,
    "target": "biceps",
    "instructions": "Sit on an incline bench with a dumbbell in each hand, palms facing your torso and arms fully extended.\nKeep your back against the bench and your feet flat on the floor.\nWhile keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/gnkFJTqnZp9A8L",
    "id": 321,
    "target": "pectorals",
    "instructions": "Set an incline bench to a 45-degree angle and sit on it with a dumbbell in each hand, resting on your thighs.\nLie back on the bench and position the dumbbells at shoulder level with your palms facing each other.\nPress the dumbbells up and away from your body until your arms are fully extended.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ElXc3Ha4B25sT4",
    "id": 1618,
    "target": "triceps",
    "instructions": "Sit on an exercise ball with a dumbbell in each hand, palms facing each other.\nWalk your feet forward and roll your body down the ball until your head, neck, and upper back are supported on the ball.\nHold the dumbbells at shoulder level, elbows bent and pointing out to the sides.\nPress the dumbbells up and slightly inward, keeping your palms facing each other.\nExtend your arms fully, squeezing your triceps at the top of the movement.\nSlowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/pTM2YlYOwVmYQ0",
    "id": 322,
    "target": "biceps",
    "instructions": "Sit on an incline bench with a dumbbell in each hand, palms facing each other.\nRest your upper arms on the bench, allowing your elbows to hang down and your palms to face forward.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/2ONoqQguzjMc9A",
    "id": 1279,
    "target": "pectorals",
    "instructions": "Adjust the incline bench to a 30-45 degree angle.\nSit on the bench with a dumbbell in one hand, resting it on your thigh.\nLie back on the bench, keeping your feet flat on the ground.\nHold the dumbbell with your arm extended straight up over your chest.\nLower the dumbbell out to the side in a wide arc, keeping a slight bend in your elbow.\nPause when your arm is parallel to the ground, then reverse the motion to bring the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ECm9cVo2egft1z",
    "id": 1280,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball with a dumbbell in one hand.\nWalk your feet forward and roll your body down until your head, neck, and upper back are supported on the ball.\nHold the dumbbell with your arm extended straight up over your chest, palm facing inwards.\nSlowly lower the dumbbell out to the side, keeping a slight bend in your elbow.\nPause for a moment when your arm is parallel to the ground.\nEngage your chest muscles to bring the dumbbell back up to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/IsLs-ZYsxDQH7Z",
    "id": 1619,
    "target": "triceps",
    "instructions": "Sit on an incline bench with a dumbbell in one hand, resting on your thigh.\nLean back on the bench and use your thigh to help raise the dumbbell to shoulder height.\nRotate your wrist so that your palm is facing inward, towards your body.\nPress the dumbbell up and away from your body, extending your arm fully.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/8dwmC8bJvq9iCY",
    "id": 1620,
    "target": "triceps",
    "instructions": "Sit on an exercise ball with a dumbbell in one hand.\nWalk your feet forward and roll your body down until your head, neck, and upper back are supported on the ball.\nHold the dumbbell with your palm facing inward and your elbow bent at a 90-degree angle.\nPress the dumbbell up towards the ceiling, straightening your arm.\nLower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Gbh9DOuFo-1aix",
    "id": 323,
    "target": "delts",
    "instructions": "Sit on an incline bench with a dumbbell in one hand, resting it on your thigh.\nLean forward and position your upper arm against the inside of your thigh.\nRaise the dumbbell to the side, keeping your arm slightly bent and your palm facing down.\nContinue lifting until your arm is parallel to the floor.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/h1YWMHgYoE3HzO",
    "id": 1281,
    "target": "pectorals",
    "instructions": "Sit on an incline bench with a dumbbell in one hand, resting on your thigh.\nLie back on the bench and position the dumbbell at shoulder level, palm facing forward.\nPress the dumbbell upward and slightly inward, extending your arm fully.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/RsomL5jS-YNwSS",
    "id": 1282,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball with a dumbbell in one hand, feet flat on the ground.\nSlowly walk your feet forward, rolling the ball until your head, neck, and upper back are supported on the ball.\nHold the dumbbell at shoulder height with your palm facing forward.\nPress the dumbbell upward until your arm is fully extended.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/BU48NZbmiS4sGn",
    "id": 324,
    "target": "pectorals",
    "instructions": "Set up an incline bench at a 45-degree angle.\nSit on the bench with a dumbbell in each hand, palms facing each other.\nPlant your feet firmly on the ground and keep your back straight against the bench.\nStart with the dumbbells at shoulder level, elbows bent and palms facing each other.\nPress the dumbbells up and away from your body, extending your arms fully.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/d-5IY83Zy0eiXv",
    "id": 1283,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball with a dumbbell in each hand, palms facing forward.\nSlowly walk your feet forward, rolling your body down the ball until your head, neck, and upper back are supported on the ball.\nHold the dumbbells at shoulder level, elbows bent and pointing out to the sides.\nPress the dumbbells upward, extending your arms fully.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/uuHaw5CL6D1J-W",
    "id": 325,
    "target": "delts",
    "instructions": "Sit on an incline bench with a dumbbell in each hand, resting on your thighs.\nLean back on the bench and raise the dumbbells to shoulder height, palms facing forward.\nKeeping your back against the bench, exhale and raise the dumbbells above your head, fully extending your arms.\nPause for a moment at the top, then inhale and slowly lower the dumbbells back to shoulder height.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/wfOYl9k4YD62eR",
    "id": 326,
    "target": "delts",
    "instructions": "Set up an incline bench at a 45-degree angle.\nSit on the bench with your chest against the backrest and hold a dumbbell in each hand.\nExtend your arms straight down with your palms facing each other.\nKeeping a slight bend in your elbows, raise your arms out to the sides until they are parallel to the ground.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ises646l2unKKX",
    "id": 327,
    "target": "upper back",
    "instructions": "Set up an incline bench at a 45-degree angle.\nGrab a dumbbell in each hand and sit on the bench with your chest against the incline.\nExtend your arms fully, allowing the dumbbells to hang straight down from your shoulders.\nPull the dumbbells up towards your chest, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/uwnIfEStkUtBWw",
    "id": 329,
    "target": "traps",
    "instructions": "Set an incline bench to a 45-degree angle and sit on it with a dumbbell in each hand.\nPlace your feet flat on the ground and let your arms hang straight down with your palms facing your body.\nKeeping your arms straight, shrug your shoulders up towards your ears as high as possible.\nHold the contraction for a moment, then slowly lower your shoulders back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/NZBcsR3d8bNn4P",
    "id": 3542,
    "target": "delts",
    "instructions": "Set an incline bench to a 45-degree angle and sit on it with a dumbbell in each hand, palms facing inwards.\nLean forward and let your arms hang straight down, perpendicular to the floor.\nKeeping your arms straight, raise them out to the sides until they are parallel to the floor, forming a 'T' shape with your body.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/bHWw8EhoXeOKHE",
    "id": 330,
    "target": "triceps",
    "instructions": "Sit on an incline bench with a dumbbell in each hand, palms facing inwards.\nExtend your arms fully overhead, keeping your elbows close to your head.\nLower the dumbbells behind your head by bending your elbows, keeping your upper arms stationary.\nPause for a moment, then raise the dumbbells back to the starting position by extending your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/4TR6BsJne29GEF",
    "id": 331,
    "target": "pectorals",
    "instructions": "Set an incline bench to a 45-degree angle and sit on it with a dumbbell in each hand, palms facing each other.\nLie back on the bench and press the dumbbells up to the starting position, directly above your chest, with your arms extended.\nLower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest.\nAs you lower the dumbbells, rotate your wrists so that your palms face forward at the bottom of the movement.\nReverse the motion and bring the dumbbells back up to the starting position, squeezing your chest muscles together at the top.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/kzgLjSgIr97PtR",
    "id": 1733,
    "target": "triceps",
    "instructions": "Sit on an incline bench with a dumbbell in each hand, resting on your thighs.\nSlowly lie back on the bench, keeping the dumbbells close to your chest.\nOnce you are fully lying down, extend your arms straight up towards the ceiling, keeping your elbows slightly bent.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/CNtF4xp2aICsQa",
    "id": 3541,
    "target": "upper back",
    "instructions": "Set an incline bench to a 45-degree angle and sit on it with a dumbbell in each hand, palms facing inwards.\nLean forward slightly and let your arms hang straight down, keeping a slight bend in your elbows.\nRaise your arms out to the sides and up in a Y shape until they are parallel to the ground.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/5ovGHJzj6YBSIm",
    "id": 332,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at your sides.\nRaise your arms out to the sides until they are parallel to the ground, forming a T shape with your body.\nPause for a moment, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/WFF0cDGlO4qOzk",
    "id": 333,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nBring your upper arms close to your sides, with your elbows bent at a 90-degree angle.\nExtend your arms straight back, squeezing your triceps at the top of the movement.\nPause for a moment, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/bvLp8Rlt-Jrgdh",
    "id": 1734,
    "target": "triceps",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your back straight.\nHold a dumbbell in each hand with your palms facing inwards and your arms bent at a 90-degree angle.\nExtend your arms straight back, squeezing your triceps at the top of the movement.\nPause for a moment, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/tdqoocPX68GENP",
    "id": 1660,
    "target": "biceps",
    "instructions": "Kneel on the floor with an exercise ball in front of you.\nPlace your elbows on top of the exercise ball, holding a dumbbell in each hand with your palms facing up.\nKeeping your upper arms stationary, exhale and curl the dumbbells while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/a5jCJbVzJ53N15",
    "id": 334,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing your body.\nKeep your back straight and engage your core.\nRaise your arms out to the sides until they are parallel to the floor, keeping a slight bend in your elbows.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/OSa0yl8paogZeo",
    "id": 335,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing your body.\nKeep your back straight and engage your core.\nRaise your arms out to the sides until they are parallel to the ground, keeping a slight bend in your elbows.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nNext, raise your arms in front of you until they are parallel to the ground, again keeping a slight bend in your elbows.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/0VeviMiEq2k3PP",
    "id": 336,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.\nTake a step forward with your right foot, lowering your body into a lunge position.\nKeep your back straight and your chest up as you lower your body.\nPush through your right heel to return to the starting position.\nRepeat with your left leg.\nAlternate legs for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/VcGqXco02RuXnF",
    "id": 1658,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing forward.\nTake a step forward with your right foot, lowering your body into a lunge position. Your right knee should be bent at a 90-degree angle and your left knee should be hovering just above the ground.\nAs you lunge forward, simultaneously curl the dumbbells towards your shoulders, keeping your elbows close to your body.\nPause for a moment at the bottom of the lunge, then push through your right heel to return to the starting position, lowering the dumbbells back down to your sides.\nRepeat the lunge and bicep curl on the opposite side, stepping forward with your left foot.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/rvBP3Xjvsa9eUz",
    "id": 337,
    "target": "triceps",
    "instructions": "Lie flat on a bench with your feet flat on the ground and your head at the end of the bench.\nHold a dumbbell with both hands and extend your arms straight up above your chest, palms facing each other.\nKeeping your upper arms stationary, slowly lower the dumbbell in an arc behind your head until your forearms are parallel to the ground.\nPause for a moment, then contract your triceps to bring the dumbbell back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/TNZkce81dP1C40",
    "id": 1729,
    "target": "triceps",
    "instructions": "Lie flat on a bench with a dumbbell in each hand, palms facing each other.\nExtend your arms straight up over your chest, keeping a slight bend in your elbows.\nLower one dumbbell down towards your head, bending at the elbow, while keeping the other arm extended.\nPause for a moment at the bottom, then raise the dumbbell back up to the starting position.\nRepeat with the other arm, alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/SqvPTNtDlr7Vzr",
    "id": 338,
    "target": "triceps",
    "instructions": "Lie flat on a bench with a dumbbell in each hand, palms facing each other and arms extended straight up over your chest.\nLower the dumbbells towards your shoulders by bending your elbows, keeping your upper arms stationary.\nPause for a moment at the bottom, then press the dumbbells back up to the starting position by extending your elbows.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/lXMdGoA07Xol51",
    "id": 863,
    "target": "delts",
    "instructions": "Lie on your side on a flat bench with your upper arm against your side and your elbow bent 90 degrees.\nHold a dumbbell in your hand with your palm facing down.\nKeeping your upper arm against your side, slowly rotate your forearm upward as far as possible.\nPause for a moment at the top, then slowly lower your forearm back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/MhBUxkdMKXIQwj",
    "id": 339,
    "target": "hamstrings",
    "instructions": "Lie flat on your back with your legs extended and a dumbbell resting on your lower abdomen.\nBend your knees and bring the dumbbell towards your glutes, keeping your feet flat on the ground.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/HqCFXqC9MbnnLz",
    "id": 340,
    "target": "pectorals",
    "instructions": "Lie flat on a bench with a dumbbell in each hand, palms facing each other and arms extended straight up.\nLower the dumbbells to the sides of your chest, keeping your elbows at a 90-degree angle.\nPress the dumbbells back up to the starting position, fully extending your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/R6l74RZqGEVsBI",
    "id": 2470,
    "target": "delts",
    "instructions": "Lie face down on the floor with a dumbbell in each hand, palms facing each other.\nExtend your arms straight out in front of you, keeping a slight bend in your elbows.\nEngaging your shoulder muscles, lift your arms up and out to the sides, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/K8AtFwQ3dLyDms",
    "id": 341,
    "target": "delts",
    "instructions": "Lie face down on a flat bench with a dumbbell in one hand, palm facing inwards.\nExtend your arm straight down towards the floor, keeping it close to your body.\nRaise your arm up and back, squeezing your shoulder blade towards your spine.\nPause for a moment at the top, then slowly lower your arm back down to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/6nDoHH1T4hFcCB",
    "id": 343,
    "target": "pectorals",
    "instructions": "Lie flat on a bench with a dumbbell in one hand and your feet flat on the ground.\nHold the dumbbell at shoulder level with your palm facing forward.\nPress the dumbbell upward until your arm is fully extended.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/RNIb6Y5KuA4gfk",
    "id": 342,
    "target": "pectorals",
    "instructions": "Lie flat on a bench with your back supported and feet flat on the ground.\nHold a dumbbell in one hand with your palm facing towards your feet.\nExtend your arm straight up towards the ceiling, keeping your elbow slightly bent.\nSlowly lower the dumbbell down towards your chest, keeping your elbow close to your body.\nPause for a moment at the bottom, then push the dumbbell back up to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/21cDbrXeIsLX5I",
    "id": 344,
    "target": "triceps",
    "instructions": "Lie flat on a bench with your back and head supported, and your feet flat on the ground.\nHold a dumbbell in one hand with your palm facing down, and extend your arm straight up above your shoulder.\nKeeping your upper arm stationary, slowly lower the dumbbell behind your head by bending your elbow.\nPause for a moment at the bottom, then extend your arm back up to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/v05jtmmDfzDAnL",
    "id": 345,
    "target": "delts",
    "instructions": "Lie face down on a flat bench with a dumbbell in one hand, hanging towards the floor.\nKeep your arm straight and lift the dumbbell out to the side, away from your body.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/LUve7IJBLZ7oiZ",
    "id": 346,
    "target": "triceps",
    "instructions": "Lie flat on a bench with your back and head supported, and your feet flat on the ground.\nHold a dumbbell in one hand with an underhand grip, and extend your arm straight up above your shoulder.\nKeeping your upper arm stationary, slowly lower the dumbbell behind your head by bending your elbow.\nPause for a moment at the bottom, then extend your arm back up to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/QI1VYLegcuU0yR",
    "id": 347,
    "target": "forearms",
    "instructions": "Lie flat on a bench with your chest facing down and your arms extended straight down, holding a dumbbell in each hand.\nRotate your palms so they are facing up.\nKeeping your upper arms stationary, exhale and curl the dumbbells as you rotate your palms to face down.\nInhale and slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/CPy396V17X9Orp",
    "id": 2705,
    "target": "forearms",
    "instructions": "Lie flat on the floor with your face down and your arms extended straight out in front of you, holding a dumbbell in each hand.\nRotate your palms so they are facing down towards the floor.\nKeeping your arms straight, lift the dumbbells off the floor by contracting your forearms.\nContinue lifting until your forearms are fully contracted and the dumbbells are at shoulder level.\nHold for a moment, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/GTqz4A7urL9ebI",
    "id": 1284,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball and roll forward until your upper back is resting on the ball.\nHold a dumbbell with both hands and extend your arms straight up over your chest.\nSlowly lower the dumbbell behind your head while keeping your arms straight.\nPause for a moment, then raise the dumbbell back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/vV1T37Hi6a8VX1",
    "id": 1328,
    "target": "upper back",
    "instructions": "Lie face down on a flat bench with a dumbbell in each hand, palms facing inwards.\nExtend your arms straight down towards the floor, keeping a slight bend in your elbows.\nEngaging your back muscles, lift the dumbbells up towards your chest, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Jg0L9DELmXOXGU",
    "id": 348,
    "target": "delts",
    "instructions": "Lie face down on a flat bench with a dumbbell in each hand, palms facing each other.\nExtend your arms straight down towards the floor, keeping a slight bend in your elbows.\nEngaging your shoulder muscles, lift your arms out to the sides until they are parallel to the floor.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/01icqzCb7uUOLZ",
    "id": 1735,
    "target": "triceps",
    "instructions": "Lie flat on a bench with a dumbbell in one hand and your arm fully extended above your chest.\nLower the dumbbell in a controlled manner towards your forehead, keeping your upper arm stationary.\nPause briefly at the bottom of the movement, then extend your arm back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ZeHPFtEx2scKB3",
    "id": 349,
    "target": "forearms",
    "instructions": "Lie flat on a bench with your feet flat on the ground.\nHold a dumbbell in each hand with your palms facing up and your arms fully extended.\nKeeping your upper arms stationary, curl the dumbbells towards your shoulders by contracting your forearms.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/MBAyBCJor6ZTeR",
    "id": 2706,
    "target": "forearms",
    "instructions": "Lie flat on your back on the floor with your legs extended and your arms by your sides, holding a dumbbell in each hand.\nRotate your palms to face up, keeping your elbows close to your sides.\nSlowly curl the dumbbells towards your shoulders, squeezing your forearms.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/smTR4cUNnnWCt8",
    "id": 1661,
    "target": "biceps",
    "instructions": "Lie flat on a bench with your back and head supported, and your feet flat on the ground.\nHold a dumbbell in each hand with your palms facing up and your arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/FlJgIgupFuVfU4",
    "id": 350,
    "target": "biceps",
    "instructions": "Lie flat on a bench with a dumbbell in each hand, palms facing up and arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/IlRkHhFn2uq0xn",
    "id": 351,
    "target": "triceps",
    "instructions": "Lie flat on a bench with a dumbbell in each hand, palms facing each other.\nExtend your arms straight up over your chest, keeping your elbows close to your body.\nLower the dumbbells down towards your forehead, bending your elbows.\nPause for a moment, then extend your arms back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/bAWTurt5b2c98E",
    "id": 1662,
    "target": "biceps",
    "instructions": "Lie flat on a bench with a dumbbell in each hand, palms facing up and arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/MpXrAo6HN8yBuE",
    "id": 352,
    "target": "triceps",
    "instructions": "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.\nHold a dumbbell in each hand with a neutral grip (palms facing each other) and your arms extended straight up over your chest.\nSlowly lower the dumbbells down towards your chest, keeping your elbows close to your body.\nPause for a moment at the bottom, then push the dumbbells back up to the starting position, fully extending your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/lF9sbAH5KmcVs6",
    "id": 1285,
    "target": "pectorals",
    "instructions": "Sit on a flat bench with a dumbbell in one hand, resting it on top of your thigh.\nLie back on the bench, keeping the dumbbell pressed against your thigh.\nUsing your free hand, help lift the dumbbell up to the starting position.\nHold the dumbbell directly above your shoulder with your arm extended and palm facing inward.\nLower the dumbbell out to the side in a wide arc, keeping a slight bend in your elbow.\nPause when your arm is parallel to the ground, then reverse the movement and bring the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms and repeat."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/JhUHaW6t70cn9H",
    "id": 292,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in one hand with your palm facing your body.\nBend your knees slightly and hinge forward at the hips, keeping your back straight and your core engaged.\nLet the dumbbell hang straight down towards the floor, with your arm fully extended.\nPull the dumbbell up towards your chest, keeping your elbow close to your body and squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/BGl3YX1TRKnX0p",
    "id": 1286,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball with a dumbbell in one hand and your feet flat on the ground.\nWalk your feet forward, rolling the ball until your upper back is supported on the ball and your head, neck, and shoulders are off the ball.\nExtend your arm with the dumbbell straight up above your chest, palm facing inward.\nSlowly lower the dumbbell out to the side, keeping a slight bend in your elbow.\nPause for a moment when your arm is parallel to the ground.\nEngage your chest muscles to bring the dumbbell back up to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/-hSHK3gyJgCosQ",
    "id": 353,
    "target": "biceps",
    "instructions": "Sit on a stability ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nHold a dumbbell in one hand with your palm facing up and your arm extended down towards the floor.\nRest your elbow on the inside of your thigh, just above the knee.\nKeeping your upper arm stationary, exhale and curl the dumbbell up towards your shoulder while contracting your biceps.\nPause for a moment at the top of the movement, then inhale and slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch arms and repeat."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/DpjzTexNUxB3Pg",
    "id": 1287,
    "target": "pectorals",
    "instructions": "Lie on a decline bench with a dumbbell in one hand, resting on your chest.\nPlace your feet flat on the ground and keep your back pressed against the bench.\nExtend your arm and push the dumbbell up towards the ceiling, fully extending your elbow.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/j9m1R2HAExxWOr",
    "id": 1288,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball with a dumbbell in one hand and your feet flat on the ground.\nWalk your feet forward and roll your body down until your upper back is resting on the exercise ball.\nExtend your arm with the dumbbell straight up above your chest, palm facing inwards.\nSlowly lower the dumbbell out to the side, keeping a slight bend in your elbow.\nPause for a moment, then squeeze your chest muscles to bring the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/LurTpNCkb2q5c6",
    "id": 1736,
    "target": "triceps",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your back straight.\nHold a dumbbell in one hand with your palm facing up and your elbow bent at a 90-degree angle.\nExtend your arm straight up towards the ceiling, keeping your elbow stationary.\nSlowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/-mNv7HCNUhAA26",
    "id": 1663,
    "target": "biceps",
    "instructions": "Sit on a preacher bench with a dumbbell in one hand and your upper arm resting on the pad.\nHold the dumbbell with a neutral grip (palms facing your body).\nKeeping your upper arm stationary, exhale and curl the dumbbell up towards your shoulder.\nPause for a moment at the top, squeezing your biceps.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/aVFFwKctKj23eI",
    "id": 1621,
    "target": "triceps",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your back straight.\nHold a dumbbell in one hand with your palm facing inwards and your elbow bent at a 90-degree angle.\nPlace your other hand on your hip for stability.\nPress the dumbbell upwards, extending your arm fully.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/wEq2Fv4aEbRlME",
    "id": 1289,
    "target": "pectorals",
    "instructions": "Adjust the incline bench to a 45-degree angle.\nSit on the bench with your back against the pad and feet flat on the ground.\nHold a dumbbell in one hand with an overhand grip, resting it on your shoulder.\nPush the dumbbell up and away from your body, extending your arm fully.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/AuMlnzfoQ8o6T7",
    "id": 354,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in your right hand.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nBring your right elbow up to your side, keeping it bent at a 90-degree angle.\nExtend your right arm straight back, squeezing your triceps at the top of the movement.\nSlowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/pEiGemj8D4xEnH",
    "id": 355,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in one hand with your palm facing your body.\nKeep your back straight and your core engaged throughout the exercise.\nRaise the dumbbell to the side, keeping your arm straight and your palm facing down.\nContinue lifting until your arm is parallel to the ground.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/6Z80fChPyobOfv",
    "id": 356,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in one hand, with your palm facing your body.\nPlace your other hand on a stable surface, such as a bench or wall, for support.\nKeep your back straight and engage your core.\nRaise the dumbbell out to the side, keeping your arm straight and your palm facing down.\nContinue lifting until your arm is parallel to the ground.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/0WQM9DHFIzyE2M",
    "id": 1290,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nHold a dumbbell in one hand and position it at shoulder height, with your elbow bent and palm facing forward.\nSlowly press the dumbbell upward until your arm is fully extended, while keeping your core engaged and maintaining balance on the exercise ball.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Fi4sjpYkKM4WhE",
    "id": 1665,
    "target": "biceps",
    "instructions": "Lie face down on a flat bench with a dumbbell in one hand, palm facing down.\nExtend your arm fully, letting it hang straight down towards the floor.\nKeeping your upper arm stationary, curl the dumbbell up towards your shoulder by contracting your biceps.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/0zxjKeSF6G8Mxv",
    "id": 1666,
    "target": "biceps",
    "instructions": "Lie face down on a flat bench with a dumbbell in one hand, palm facing your body and arm fully extended.\nKeep your upper arm stationary and curl the dumbbell towards your shoulder, contracting your biceps.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/dBMytiOftSxh50",
    "id": 1291,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nHold a dumbbell with one hand and extend your arm straight up above your chest.\nSlowly lower the dumbbell behind your head while keeping your arm straight.\nPause for a moment, then raise the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/tnP5vn1TcuK84k",
    "id": 358,
    "target": "forearms",
    "instructions": "Sit on a bench or chair with your feet flat on the ground.\nHold a dumbbell in one hand with an overhand grip, palm facing down.\nRest your forearm on your thigh, with your wrist hanging off the edge.\nSlowly lower the dumbbell towards the ground by flexing your wrist.\nPause for a moment at the bottom, then slowly curl your wrist back up towards your body.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/BzV8wKHIlQ3kDG",
    "id": 359,
    "target": "delts",
    "instructions": "Sit on a bench with your feet flat on the ground and your back straight.\nHold a dumbbell in one hand with your palm facing inwards.\nLean forward and place your free hand on the bench for support.\nKeep your arm slightly bent and raise it out to the side until it is parallel to the ground.\nPause for a moment at the top, then slowly lower your arm back down to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ol1VAcH8xDec1l",
    "id": 1622,
    "target": "pectorals",
    "instructions": "Sit on a flat bench with a dumbbell in one hand, palm facing towards your body.\nPlace your feet flat on the ground and keep your back straight.\nRaise the dumbbell to shoulder height, keeping your elbow close to your body.\nPress the dumbbell upwards until your arm is fully extended.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/OQnDIwcPfvQt9h",
    "id": 1414,
    "target": "biceps",
    "instructions": "Sit on a preacher bench with your chest against the pad and your arm extended over the edge of the bench, holding a dumbbell with an underhand grip.\nLower the dumbbell slowly until your arm is fully extended.\nCurl the dumbbell back up towards your shoulder, keeping your upper arm stationary.\nSqueeze your biceps at the top of the movement, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/M2BbqaA52-tIMu",
    "id": 1667,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in one hand, palm facing down and arm fully extended.\nKeeping your upper arm stationary, curl the dumbbell towards your shoulder by flexing your elbow.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/esrL-vdB77NcBU",
    "id": 1668,
    "target": "biceps",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your back straight.\nHold a dumbbell in one hand with your palm facing up and your arm fully extended.\nKeeping your upper arm stationary, curl the dumbbell towards your shoulder by contracting your biceps.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/v49KVZVDV-ZGnE",
    "id": 1669,
    "target": "biceps",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a dumbbell in one hand with a neutral grip (palms facing each other).\nRest your elbow on the inside of your thigh, just above the knee.\nKeeping your upper arm stationary, exhale and curl the dumbbell up towards your shoulder.\nPause for a moment at the top, squeezing your biceps.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/yfGxITi5n4n2Z0",
    "id": 1415,
    "target": "forearms",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in one hand, palm facing up.\nRest your forearm on your thigh, allowing your wrist to hang off the edge.\nKeeping your forearm stationary, curl your wrist upward as far as possible.\nPause for a moment at the top, then slowly lower your wrist back down to the starting position.\nRepeat for the desired number of repetitions, then switch to the other hand."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/6Bz80boAzvlzJg",
    "id": 361,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in one hand at shoulder level, palm facing forward.\nPress the dumbbell upward until your arm is fully extended overhead.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/uOp9C1sRSPZv4m",
    "id": 360,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in one hand at shoulder level, palm facing forward.\nEngage your core and press the dumbbell straight up overhead, fully extending your arm.\nPause for a moment at the top, then slowly lower the dumbbell back to shoulder level.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Blz35RfNyDhluf",
    "id": 3888,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in one hand with an overhand grip.\nBend your knees slightly and hinge forward at the hips, keeping your back straight and chest up.\nLower the dumbbell towards the ground, keeping it close to your body.\nExplosively extend your hips, knees, and ankles, driving the dumbbell upwards in a straight line.\nAs the dumbbell reaches shoulder height, quickly rotate your hand and punch it overhead, fully extending your arm.\nCatch the dumbbell overhead with a slight bend in your knees and hips.\nLower the dumbbell back down to the starting position in a controlled manner.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/pPAJjBx1aNejHU",
    "id": 1670,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in one hand, palm facing forward and arm fully extended.\nKeeping your upper arm stationary, exhale and curl the weight upward while contracting your biceps.\nContinue to raise the dumbbell until your biceps are fully contracted and the dumbbell is at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/VFJst4AgrbkyBo",
    "id": 1671,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your torso.\nKeep your elbows close to your torso and your upper arms stationary.\nExhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/kZDim2DfR0fxY9",
    "id": 362,
    "target": "triceps",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a dumbbell in one hand and place your other hand on the bench for support.\nRaise the dumbbell overhead, keeping your upper arm close to your head and your elbow pointing forward.\nLower the dumbbell behind your head by bending your elbow, keeping your upper arm stationary.\nExtend your arm back up to the starting position, fully straightening your elbow.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/mwlB3EP5I4qfD6",
    "id": 363,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in one hand with an overhand grip.\nLet the dumbbell hang at arm's length in front of your thighs, with your palm facing your body.\nKeeping your back straight and your core engaged, exhale and lift the dumbbell straight up towards your chin, leading with your elbow.\nPause for a moment at the top, then inhale and slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/hvc9T9NqZTMY9v",
    "id": 364,
    "target": "forearms",
    "instructions": "Sit on a bench or chair with your feet flat on the ground.\nHold a dumbbell in one hand with an underhand grip, resting your forearm on your thigh.\nAllow your wrist to extend, letting the dumbbell roll down towards your fingers.\nSlowly curl your wrist back up, bringing the dumbbell towards your forearm.\nRepeat for the desired number of repetitions, then switch to the other hand."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/8rLoTDTRL73S3B",
    "id": 1672,
    "target": "biceps",
    "instructions": "Sit on a preacher curl bench and hold a dumbbell in one hand with an underhand grip.\nRest your upper arm on the preacher bench pad, allowing your arm to fully extend.\nCurl the dumbbell up towards your shoulder, keeping your upper arm stationary.\nAt the top of the curl, rotate your wrist so that your palm faces up.\nSlowly lower the dumbbell back down to the starting position, rotating your wrist back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Nf7Z-3RS6L3ueu",
    "id": 1292,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball with a dumbbell in each hand, palms facing each other.\nPlace one foot on the ground and extend the other leg straight out in front of you.\nLean forward slightly and bring your arms out to the sides, keeping a slight bend in your elbows.\nSlowly lower the dumbbells down and out to the sides, feeling a stretch in your chest.\nPause for a moment at the bottom, then squeeze your chest muscles to bring the dumbbells back up to the starting position.\nRepeat for the desired number of repetitions, then switch legs and repeat."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/hiQAGMIJGMolq2",
    "id": 365,
    "target": "biceps",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in each hand, palms facing up.\nRest your forearms on the bench, allowing your wrists to hang off the edge.\nKeeping your upper arms stationary, exhale and curl the dumbbells up towards your shoulders.\nPause for a moment at the top, then inhale and slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/kWwIhY3eToRFfX",
    "id": 366,
    "target": "biceps",
    "instructions": "Sit on a bench with a dumbbell in one hand and your arm extended over the bench, palm facing up.\nKeep your upper arm stationary and curl the dumbbell towards your shoulder, keeping your wrist in a neutral position.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/0GaUtOvsr1bUap",
    "id": 1441,
    "target": "forearms",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in one hand, palm facing down.\nRest your forearm on the bench with your wrist hanging off the edge.\nSlowly curl your wrist upwards, bringing the dumbbell towards your forearm.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/7CayffOqWQBO9D",
    "id": 367,
    "target": "forearms",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in one hand, palm facing down.\nRest your forearm on the bench with your wrist hanging off the edge.\nSlowly curl your wrist upwards, bringing the dumbbell towards your forearm.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/12h7-M8XHYuUS6",
    "id": 368,
    "target": "forearms",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in each hand, palms facing down.\nRest your forearms on the bench, allowing your wrists to hang off the edge.\nSlowly curl your wrists upward, bringing the dumbbells towards your body.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/n6C51BRqHWSE4F",
    "id": 369,
    "target": "forearms",
    "instructions": "Sit on a bench with your forearms resting on the bench and your palms facing up, holding a dumbbell in each hand.\nAllow your wrists to hang over the edge of the bench.\nSlowly curl your wrists upward, squeezing your forearms at the top of the movement.\nPause for a moment, then slowly lower your wrists back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/G6iwpOi1PJ-0w6",
    "id": 1329,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with an overhand grip.\nBend forward at the hips, keeping your back straight and your knees slightly bent.\nLet your arms hang straight down, palms facing your body.\nEngage your core and pull the dumbbells up towards your chest, keeping your elbows close to your body.\nAs you pull the dumbbells up, rotate your palms so they face away from your body.\nSqueeze your shoulder blades together at the top of the movement.\nSlowly lower the dumbbells back down to the starting position, rotating your palms back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/9OoUzkJJB9sleB",
    "id": 1623,
    "target": "triceps",
    "instructions": "Set up an incline bench at a 45-degree angle.\nSit on the bench with your back against the backrest and feet flat on the ground.\nHold a dumbbell in each hand with an overhand grip, palms facing inwards.\nExtend your arms straight up above your chest, keeping a slight bend in your elbows.\nLower the dumbbells slowly towards your shoulders, keeping your elbows close to your body.\nPause for a moment at the bottom, then press the dumbbells back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/kNEXK8UsGvhuHr",
    "id": 370,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your torso.\nKeep your elbows close to your torso and rotate the palms of your hands until they are facing forward.\nThis will be your starting position.\nNow, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nThen, inhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the recommended amount of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Y0vnYrwydb8NHg",
    "id": 371,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at your sides.\nLower your body into a squat position by bending your knees and pushing your hips back.\nAs you reach the bottom of the squat, explode upward, jumping off the ground.\nWhile in the air, quickly switch the position of your feet, landing with your opposite foot forward.\nImmediately lower your body back into a squat position and repeat the jump, switching your feet again.\nContinue alternating the position of your feet with each jump for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/loKMHGlzWC0im0",
    "id": 372,
    "target": "biceps",
    "instructions": "Sit on a preacher curl bench with your upper arms resting on the pad and your chest against it.\nHold a dumbbell in each hand with your palms facing up and your arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/D-h8lZklfy-Ku1",
    "id": 1673,
    "target": "biceps",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your back straight.\nHold a dumbbell in one hand with an underhand grip, resting your elbow on the exercise ball.\nKeeping your upper arm stationary, exhale and curl the dumbbell up towards your shoulder.\nPause for a moment at the top, then inhale and slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/A5nAFGW4jLUF7h",
    "id": 1293,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and dumbbells in each hand, resting on your thighs.\nSlowly walk your feet forward, rolling the exercise ball until your lower back is supported on the ball and your knees are at a 90-degree angle.\nRaise the dumbbells to shoulder height, palms facing forward.\nPress the dumbbells upward until your arms are fully extended.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/XDT5X5Gg6D5s1t",
    "id": 373,
    "target": "triceps",
    "instructions": "Sit on a bench or chair with your back straight and feet flat on the ground.\nHold a dumbbell with both hands, palms facing down, and extend your arms straight up overhead.\nKeeping your upper arms close to your head and elbows pointing forward, slowly lower the dumbbell behind your head by bending your elbows.\nPause for a moment, then extend your arms back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/jqT7MAjh-bRfcF",
    "id": 374,
    "target": "biceps",
    "instructions": "Adjust the bench to a 45-degree incline.\nLie face down on the bench with your chest and stomach resting against it.\nHold a dumbbell in each hand with your palms facing down and your arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/BcwwFU5hLrHbu6",
    "id": 1674,
    "target": "biceps",
    "instructions": "Adjust the bench to a 45-degree incline.\nLie face down on the bench with a dumbbell in each hand, palms facing each other.\nAllow your arms to hang straight down towards the floor, keeping your elbows slightly bent.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/6cTt4POhMKaL5Q",
    "id": 375,
    "target": "pectorals",
    "instructions": "Lie flat on a bench with your head at one end and your feet on the floor.\nHold a dumbbell with both hands and extend your arms straight above your chest.\nKeeping a slight bend in your elbows, slowly lower the dumbbell behind your head until you feel a stretch in your chest and shoulders.\nPause for a moment, then raise the dumbbell back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/fmkYasZIndF9jz",
    "id": 1294,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and the dumbbell resting on your thighs.\nSlowly walk your feet forward, rolling the exercise ball down your back until your head, neck, and upper back are supported on the ball.\nHold the dumbbell with both hands and extend your arms straight up over your chest, keeping a slight bend in your elbows.\nLower the dumbbell behind your head, keeping your arms straight and maintaining control.\nPause for a moment, then raise the dumbbell back to the starting position.\nWhile keeping your arms extended, lift your hips off the ground, squeezing your glutes and engaging your core.\nLower your hips back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/l9L8Ioi5zmKKLZ",
    "id": 1295,
    "target": "pectorals",
    "instructions": "Sit on an exercise ball and hold a dumbbell with both hands above your chest, arms extended.\nSlowly lower the dumbbell behind your head while keeping your arms straight.\nPause for a moment, then raise the dumbbell back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/FJe-zhZQRDS-xu",
    "id": 1700,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder level.\nBend your knees slightly and dip your body down, then explosively extend your legs and press the dumbbells overhead.\nLock out your arms at the top of the movement, then lower the dumbbells back to shoulder level.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/j1bLdnblRDRIem",
    "id": 376,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing your body.\nKeep your back straight and engage your core.\nRaise your arms out to the sides until they are parallel to the floor, keeping a slight bend in your elbows.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/VUXeclT4EURemy",
    "id": 2292,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing your body.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nRaise your arms out to the sides, keeping a slight bend in your elbows, until they are parallel to the floor.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/MTkYkWZW7WEiI-",
    "id": 377,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and knees slightly bent.\nHold a dumbbell in each hand with your palms facing your body.\nBend forward at the waist, keeping your back straight and your core engaged.\nExtend your arms straight down towards the floor, with a slight bend in your elbows.\nRaise the dumbbells out to the sides, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/mqb1TpSCJLs27-",
    "id": 378,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nExtend your arms straight down towards the ground, palms facing each other.\nKeeping a slight bend in your elbows, lift your arms out to the sides and squeeze your shoulder blades together.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/yINiAn5tr56S31",
    "id": 380,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing your body.\nBend your knees slightly and hinge forward at the hips, keeping your back straight and core engaged.\nRaise your arms out to the sides, keeping a slight bend in your elbows, until they are parallel to the floor.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/sxy-ZQlTRGa01t",
    "id": 379,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nRaise your arms out to the sides, keeping a slight bend in your elbows, until they are parallel to the ground.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/2xRGkLIXnxqDWU",
    "id": 381,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.\nTake a step backward with your right foot, lowering your body into a lunge position.\nBend your left knee and lower your body until your left thigh is parallel to the ground.\nPause for a moment, then push through your left heel to return to the starting position.\nRepeat on the other side, stepping back with your left foot."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/hL8m-v5pc14i5t",
    "id": 382,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing down and arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/2eRt1MX8G02eFZ",
    "id": 1624,
    "target": "pectorals",
    "instructions": "Lie flat on a bench with your feet flat on the ground and your knees bent.\nHold a dumbbell in each hand with an overhand grip, palms facing towards your feet.\nExtend your arms straight up towards the ceiling, keeping a slight bend in your elbows.\nSlowly lower the dumbbells towards your chest, allowing your elbows to flare out to the sides.\nPause for a moment at the bottom, then push the dumbbells back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/5qc49M0yYzawpM",
    "id": 383,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nExtend your arms straight down in front of you, palms facing each other.\nKeeping a slight bend in your elbows, raise your arms out to the sides until they are parallel to the ground.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/j8GLJ00GHS0UTE",
    "id": 1330,
    "target": "upper back",
    "instructions": "Set up an incline bench at a 45-degree angle.\nPlace a dumbbell on the floor next to the bench.\nStand facing the bench with your feet shoulder-width apart.\nBend at the waist and place your left knee and left hand on the bench for support.\nPick up the dumbbell with your right hand using a reverse grip (palm facing down).\nKeep your back straight and your core engaged.\nPull the dumbbell up towards your chest, keeping your elbow close to your body.\nSqueeze your back muscles at the top of the movement.\nLower the dumbbell back down to the starting position in a controlled manner.\nRepeat for the desired number of repetitions.\nSwitch sides and repeat the exercise with your left arm."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/mcOlifNf0gPOgJ",
    "id": 1331,
    "target": "upper back",
    "instructions": "Set up an incline bench at a 45-degree angle.\nSit on the bench with your chest against the backrest and your feet flat on the ground.\nHold a dumbbell in each hand with an underhand grip.\nLean forward and let your arms hang straight down, fully extended.\nPull the dumbbells up towards your chest, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/fAzD61HssMu-Od",
    "id": 2327,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart and knees slightly bent.\nHold a dumbbell in each hand with an overhand grip, palms facing your body.\nBend forward at the waist, keeping your back straight and your core engaged.\nLet your arms hang straight down, fully extended, with a slight bend in your elbows.\nPull the dumbbells up towards your chest, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/rSEgrFOxrIZ7yp",
    "id": 384,
    "target": "biceps",
    "instructions": "Sit on a preacher bench with your upper arms resting on the pad and your chest against the support.\nHold a dumbbell in each hand with an underhand grip, palms facing up.\nKeeping your upper arms stationary, exhale and curl the dumbbells as you contract your biceps.\nContinue to curl the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/G3Ihqi4uoHvZUb",
    "id": 1675,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your body and arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/pm6o3xWQy00Tmb",
    "id": 385,
    "target": "forearms",
    "instructions": "Sit on a bench or chair with your feet flat on the ground.\nHold a dumbbell in each hand with an overhand grip, palms facing down.\nRest your forearms on your thighs, allowing your wrists to hang off the edge.\nSlowly curl your wrists upward, bringing the dumbbells towards your body.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/j0T1ACfy8w5vqZ",
    "id": 1459,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with an overhand grip.\nKeeping your back straight and your core engaged, hinge at the hips and lower the dumbbells towards the ground, allowing your knees to bend slightly.\nLower the dumbbells until you feel a stretch in your hamstrings, then push through your heels and engage your glutes to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/3LcfDLpap3x2GL",
    "id": 386,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing inwards.\nBend your knees slightly and hinge forward at the hips, keeping your back straight and chest up.\nRaise your arms out to the sides, keeping a slight bend in your elbows, until they are parallel to the floor.\nRotate your arms so that your palms are facing downwards.\nSlowly lower your arms back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/VGA0HIL8jlGxVs",
    "id": 2397,
    "target": "delts",
    "instructions": "Sit on a bench with a dumbbell in each hand, palms facing forward.\nRaise the dumbbells to shoulder height, with your elbows bent and palms facing forward.\nPress the dumbbells upward until your arms are fully extended.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/1vyagzVq0-CtXf",
    "id": 387,
    "target": "delts",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a dumbbell in each hand with your palms facing your body and arms extended down by your sides.\nKeeping your arms straight, raise one dumbbell in front of you until it is parallel to the ground.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat with the other arm.\nAlternate between arms for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/eghdzEDlgt5Vu5",
    "id": 1676,
    "target": "biceps",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your back straight.\nHold a dumbbell in each hand with your palms facing your body and your arms fully extended.\nKeeping your upper arms stationary, exhale and curl one dumbbell up towards your shoulder while keeping your palm facing your body.\nContinue to raise the dumbbell until your biceps are fully contracted and the dumbbell is at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat the movement with the opposite arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/AGdh60SRxofqxo",
    "id": 388,
    "target": "delts",
    "instructions": "Sit on a bench with a dumbbell in each hand, palms facing forward.\nRaise the dumbbells to shoulder height, with your elbows bent and palms facing forward.\nPress one dumbbell up overhead, fully extending your arm.\nLower the dumbbell back down to shoulder height.\nRepeat with the other arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/SyAFbJDPvifA7C",
    "id": 3546,
    "target": "delts",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a dumbbell in each hand, palms facing inwards, and raise them to shoulder height.\nPress one dumbbell up overhead while keeping the other dumbbell at shoulder height.\nLower the raised dumbbell back to shoulder height while simultaneously pressing the other dumbbell up overhead.\nContinue alternating between arms for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/dqTV5Erpwz-CL6",
    "id": 389,
    "target": "triceps",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a dumbbell with both hands and extend your arms straight up above your head.\nSlowly lower the dumbbell behind your head, keeping your elbows close to your ears.\nPause for a moment, then raise the dumbbell back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/0DebSscVi63DmN",
    "id": 2317,
    "target": "delts",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a dumbbell in each hand with your palms facing your body and your arms bent at a 90-degree angle.\nKeeping your elbows bent, raise your arms out to the sides until they are parallel to the ground.\nPause for a moment at the top, then slowly lower your arms back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/nmi7LvHK1tTGYA",
    "id": 1730,
    "target": "triceps",
    "instructions": "Sit on a bench with a dumbbell in each hand, palms facing inwards.\nBend forward at the waist, keeping your back straight and parallel to the ground.\nExtend one arm straight back, keeping it close to your body, until your arm is fully extended.\nPause for a moment, then slowly lower the dumbbell back to the starting position.\nRepeat with the other arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/YK0RKuxcmjuwpP",
    "id": 1737,
    "target": "triceps",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in each hand.\nBend forward at the waist, keeping your back straight and your head up.\nExtend your arms straight back, keeping your elbows close to your head.\nPause for a moment, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/oPp2Gd722VLBT9",
    "id": 1677,
    "target": "biceps",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in each hand, palms facing up.\nKeep your back straight and your elbows close to your torso.\nExhale and curl the dumbbells up towards your shoulders, contracting your biceps.\nPause for a moment at the top, then inhale and slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/JFRbcZWItkrTa5",
    "id": 390,
    "target": "biceps",
    "instructions": "Sit on a stability ball with your feet flat on the ground and your back straight.\nHold a dumbbell in each hand with your palms facing forward and your arms fully extended.\nKeeping your upper arms stationary, exhale and curl the dumbbells while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/iKBiLhEfasnwcl",
    "id": 3547,
    "target": "biceps",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a dumbbell in each hand with your palms facing forward and arms fully extended.\nKeeping your elbows close to your sides, curl the dumbbells up towards your shoulders.\nOnce your forearms are vertical, rotate your wrists so that your palms are facing forward.\nPress the dumbbells overhead until your arms are fully extended.\nLower the dumbbells back down to the starting position by reversing the movement.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/O5S2YeqtfYjMtL",
    "id": 1379,
    "target": "calves",
    "instructions": "Sit on a bench or chair with your feet flat on the ground and a dumbbell resting on your thighs.\nPlace the balls of your feet on a raised surface such as a step or block, with your heels hanging off the edge.\nHold onto the dumbbell for stability.\nRaise your heels as high as possible, lifting your body weight onto the balls of your feet.\nPause for a moment at the top, then slowly lower your heels back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/cLIgS-8zZP4VD0",
    "id": 391,
    "target": "biceps",
    "instructions": "Sit on a bench with your feet flat on the ground and a dumbbell in each hand, palms facing forward.\nKeep your back straight and your elbows close to your torso.\nExhale and curl the dumbbells up towards your shoulders, contracting your biceps.\nPause for a moment at the top, then inhale and slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/AbuU3sD9eusAhX",
    "id": 392,
    "target": "delts",
    "instructions": "Sit on a bench with your feet flat on the ground and a dumbbell in each hand, resting on your thighs.\nKeep your back straight and core engaged.\nRaise the dumbbells in front of you, with your palms facing down, until they are at shoulder level.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Xa2Ib9i-LKq7AQ",
    "id": 1678,
    "target": "biceps",
    "instructions": "Sit on a bench with a dumbbell in each hand, palms facing your torso and arms extended straight down.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/iY4Ann4xEi2y3j",
    "id": 393,
    "target": "biceps",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in each hand, palms facing up.\nRest your upper arms on your thighs, allowing the dumbbells to hang down.\nKeeping your upper arms stationary, curl the dumbbells up towards your shoulders by contracting your biceps.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/W9N6oa1pvHVCk5",
    "id": 394,
    "target": "triceps",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in each hand.\nBend your knees slightly and lean forward from your hips, keeping your back straight.\nBring your upper arms close to your sides and keep your elbows bent at a 90-degree angle.\nExtend your arms straight back, squeezing your triceps at the top of the movement.\nPause for a moment, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/MhUjmOf0vwAGcw",
    "id": 396,
    "target": "delts",
    "instructions": "Sit on a bench with your feet flat on the ground and a dumbbell in each hand, resting on your thighs.\nKeep your back straight and core engaged.\nRaise the dumbbells to your sides with a slight bend in your elbows, until your arms are parallel to the ground.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/IxIsSFUSBDQmF8",
    "id": 395,
    "target": "delts",
    "instructions": "Sit on a bench with your feet flat on the ground and a dumbbell in each hand, resting on your thighs.\nKeep your back straight and core engaged.\nRaise the dumbbells to your sides with a slight bend in your elbows, until your arms are parallel to the ground.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/gDYVMXw8NU29K4",
    "id": 397,
    "target": "biceps",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in each hand, palms facing each other.\nRest your forearms on your thighs, allowing the dumbbells to hang down.\nKeeping your wrists in a neutral position, curl the dumbbells up towards your shoulders.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/tDLdNSls00Etpn",
    "id": 1679,
    "target": "biceps",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your back straight.\nHold a dumbbell in one hand with your palm facing up and your arm fully extended.\nPlace your other hand on your hip for stability.\nSlowly curl the dumbbell towards your shoulder, keeping your upper arm stationary.\nPause for a moment at the top of the movement, squeezing your bicep.\nSlowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions.\nSwitch arms and repeat the exercise."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/byBjYN5BoM5XOW",
    "id": 398,
    "target": "triceps",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in one hand.\nBend your torso forward at the waist, keeping your back straight and parallel to the ground.\nExtend your arm straight back, keeping your elbow close to your body.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/13sO7U8Mqb32L2",
    "id": 399,
    "target": "forearms",
    "instructions": "Sit on a bench with your back straight and hold a dumbbell in one hand, resting it on your thigh.\nRaise the dumbbell up to shoulder height, keeping your elbow close to your body.\nRotate your forearm outward, away from your body, while keeping your upper arm stationary.\nPause for a moment at the top, then slowly rotate your forearm back to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/enwhjfA9hNTAd3",
    "id": 400,
    "target": "calves",
    "instructions": "Sit on a bench or chair with your feet flat on the ground and a dumbbell resting on your right thigh.\nExtend your left leg straight out in front of you, keeping your foot flexed.\nPlace the ball of your right foot on an elevated surface, such as a step or weight plate.\nUsing your calf muscles, raise your right heel as high as possible.\nPause for a moment at the top, then slowly lower your heel back down to the starting position.\nRepeat for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/xAGjcATyYkiJdQ",
    "id": 1380,
    "target": "calves",
    "instructions": "Sit on a bench or chair with your feet flat on the ground and a dumbbell resting on your thighs.\nPlace one foot on a raised surface, such as a step or block, with your heel hanging off the edge.\nHold the dumbbell with a hammer grip, meaning your palms are facing each other and your fingers are wrapped around the handle.\nKeeping your core engaged and your back straight, slowly raise your heel as high as possible by pushing through the ball of your foot.\nPause for a moment at the top, then slowly lower your heel back down to the starting position.\nRepeat for the desired number of repetitions, then switch to the other leg."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/uURdIGy3g0JKrg",
    "id": 1381,
    "target": "calves",
    "instructions": "Sit on a bench or chair with your back straight and your feet flat on the ground.\nHold a dumbbell in one hand and place it on top of your thigh, palm facing up.\nLift one leg off the ground and extend it in front of you, keeping your knee slightly bent.\nRaise your heel as high as possible by pushing through the ball of your foot.\nPause for a moment at the top, then slowly lower your heel back down.\nRepeat for the desired number of repetitions, then switch legs and repeat."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/7Kvih02ddxTAFk",
    "id": 401,
    "target": "forearms",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in each hand, palms facing up.\nRest your forearms on your thighs, allowing your wrists to hang off the edge.\nSlowly curl your wrists upward, squeezing your forearms at the top of the movement.\nPause for a moment, then lower your wrists back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ajTEodYd3zdhni",
    "id": 402,
    "target": "biceps",
    "instructions": "Sit on a preacher curl bench with your feet flat on the floor.\nHold a dumbbell in one hand with an underhand grip, resting your upper arm against the preacher pad.\nKeeping your upper arm stationary, exhale and curl the dumbbell up towards your shoulder.\nPause for a moment at the top, then inhale and slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Pe9YG0ClvXLXuA",
    "id": 403,
    "target": "biceps",
    "instructions": "Sit on a bench with your feet flat on the ground and hold a dumbbell in one hand, palm facing up.\nRest your elbow on the inside of your thigh, just above the knee.\nKeeping your upper arm stationary, exhale and curl the dumbbell towards your shoulder.\nPause for a moment at the top, squeezing your biceps.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/pohNaEmjpPozrt",
    "id": 1738,
    "target": "triceps",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a dumbbell with an underhand grip and extend your arm straight up overhead.\nLower the dumbbell behind your head by bending your elbow, keeping your upper arm stationary.\nPause for a moment, then extend your arm back up to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/se9czAqs2jPH-U",
    "id": 405,
    "target": "delts",
    "instructions": "Sit on a bench with a dumbbell in each hand, resting on your thighs.\nRaise the dumbbells to shoulder height, palms facing forward.\nPress the dumbbells upward until your arms are fully extended overhead.\nPause for a moment at the top, then slowly lower the dumbbells back to shoulder height.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/qBMjW-NEiFpz8H",
    "id": 404,
    "target": "delts",
    "instructions": "Sit on a bench with a dumbbell in each hand, palms facing inward.\nRaise the dumbbells to shoulder height, elbows bent and palms facing forward.\nPress the dumbbells upward until your arms are fully extended overhead.\nPause for a moment at the top, then slowly lower the dumbbells back to shoulder height.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/4jo4EUX8Su7D2W",
    "id": 2188,
    "target": "triceps",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a dumbbell with both hands and extend your arms straight up overhead.\nBend your elbows and lower the dumbbell behind your head, keeping your upper arms close to your ears.\nPause for a moment, then straighten your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/OJJ6Lr3AzGQSeU",
    "id": 406,
    "target": "traps",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand with your palms facing your body.\nKeep your arms straight and let the dumbbells hang by your sides.\nRaise your shoulders as high as possible, as if you are trying to touch your ears with your shoulders.\nHold the contraction for a second, then slowly lower your shoulders back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/453gUEd2wRXstV",
    "id": 407,
    "target": "abs",
    "instructions": "Stand up straight with your feet shoulder-width apart and hold a dumbbell in one hand, letting it hang down by your side.\nKeeping your back straight and your core engaged, slowly bend sideways at the waist towards the opposite side of the dumbbell, lowering the weight as far as you comfortably can.\nPause for a moment, then slowly return to the starting position.\nRepeat for the desired number of repetitions, then switch sides and repeat."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ECBecOo88aSMOg",
    "id": 408,
    "target": "delts",
    "instructions": "Lie on your side with your legs extended and your head supported by your arm.\nHold a dumbbell in your top hand with your palm facing down.\nKeeping your arm straight, raise the dumbbell up to shoulder height.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "back",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/An8cQVftJStqIq",
    "id": 3664,
    "target": "upper back",
    "instructions": "Start by lying on your side with your legs extended and stacked on top of each other.\nPlace your forearm on the ground directly below your shoulder, keeping your elbow bent at a 90-degree angle.\nHold a dumbbell in your top hand, with your arm extended straight down towards the ground.\nEngage your core and lift your hips off the ground, creating a straight line from your head to your heels.\nWhile maintaining the side plank position, lift the dumbbell up towards the ceiling, squeezing your shoulder blades together.\nLower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/23OPoRmxVzVIo9",
    "id": 3548,
    "target": "delts",
    "instructions": "Stand tall with your feet shoulder-width apart, holding a dumbbell in one hand.\nRaise the dumbbell overhead, fully extending your arm.\nEngage your core and keep your back straight as you walk forward, maintaining the dumbbell overhead.\nContinue walking for the desired distance or time.\nSwitch hands and repeat the exercise."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/bit7lh1IvrwgTY",
    "id": 409,
    "target": "calves",
    "instructions": "Stand on the edge of a step or platform with your heels hanging off and your toes on the step.\nHold a dumbbell in one hand and place your other hand on a wall or railing for support.\nRaise your heel as high as possible, lifting your body up onto your toes.\nPause for a moment at the top, then slowly lower your heel back down below the step.\nRepeat for the desired number of repetitions, then switch to the other leg."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/veqGOpz41I4Zye",
    "id": 1757,
    "target": "glutes",
    "instructions": "Stand with your feet hip-width apart, holding a dumbbell in your right hand.\nShift your weight onto your left leg and lift your right foot slightly off the ground.\nKeeping your back straight, hinge forward at the hips and lower the dumbbell towards the ground.\nAt the same time, extend your right leg straight behind you, maintaining a slight bend in your left knee.\nLower the dumbbell until your torso and right leg are parallel to the ground.\nPause for a moment, then engage your glutes and hamstrings to return to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/l-zt22YyNoq8uE",
    "id": 2805,
    "target": "glutes",
    "instructions": "Stand with your feet hip-width apart, holding a dumbbell in your right hand.\nPlace your left foot on a stepbox or elevated surface behind you.\nKeeping your back straight and core engaged, hinge forward at the hips, lowering the dumbbell towards the ground.\nAs you lower the dumbbell, simultaneously lift your left leg behind you, maintaining a straight line from head to heel.\nLower the dumbbell until you feel a stretch in your right hamstring, then return to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/-ExaJZde-5RuPK",
    "id": 410,
    "target": "quads",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.\nTake a step forward with one foot and position your feet so that your front foot is flat on the ground and your back foot is elevated on a bench or step.\nLower your body by bending your front knee and hip, keeping your back knee slightly bent and your back heel off the ground.\nContinue lowering until your front thigh is parallel to the ground, then push through your front heel to return to the starting position.\nRepeat for the desired number of repetitions, then switch legs and repeat."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/GqUYIpeTGp1jGU",
    "id": 411,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.\nExtend one leg forward and keep it off the ground throughout the exercise.\nBend your standing leg and lower your body down as if sitting back into a chair.\nKeep your chest up and your back straight.\nPause for a moment at the bottom, then push through your heel to return to the starting position.\nRepeat for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/3i-VEawWfitaHS",
    "id": 413,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at your sides.\nKeeping your chest up and core engaged, lower your body down by bending at the knees and hips, as if sitting back into a chair.\nContinue lowering until your thighs are parallel to the ground, or as low as you can comfortably go.\nPause for a moment at the bottom, then push through your heels to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/VaMpwaUBL55tzU",
    "id": 3560,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your body.\nKeep your elbows close to your torso and your back straight.\nExhale and curl the dumbbell in your right hand towards your shoulder, keeping your upper arm stationary.\nContinue to raise the dumbbell until your biceps are fully contracted and the dumbbell is at shoulder level.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat the curl with your left hand.\nAfter completing the curl with your left hand, exhale and press the dumbbell in your right hand overhead.\nExtend your arm fully and hold for a moment at the top.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat the press with your left hand.\nContinue alternating between curls and presses for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/9XlRGnnyfsJIsl",
    "id": 414,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder level with your palms facing forward.\nPress one dumbbell overhead, fully extending your arm.\nLower the dumbbell back to shoulder level.\nRepeat with the other arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/eKxqIDqMcJ6c63",
    "id": 415,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing your body.\nKeep your back straight and your core engaged.\nRaise one dumbbell to the side, keeping your arm straight and your palm facing down.\nContinue lifting until your arm is parallel to the ground.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat with the other arm.\nAlternate between arms for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/qmK22dZBhiciwF",
    "id": 1739,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nExtend your arms straight back, keeping your elbows close to your body.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat with the other arm, alternating sides with each repetition."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/dHr5PmnLxRPbgQ",
    "id": 2143,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand.\nExtend your arms straight out to the sides at shoulder height, palms facing down.\nKeeping your arms straight, slowly rotate your arms in a circular motion, bringing the dumbbells in front of your body and then overhead.\nContinue the circular motion, bringing the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/j7ha5i8he9mxAI",
    "id": 1740,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in one hand.\nBend forward at the waist, keeping your back straight and parallel to the ground.\nExtend your arm straight back, keeping your elbow close to your body.\nSlowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/hFecA-v7zNfY9P",
    "id": 1741,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand.\nBend forward at the waist, keeping your back straight and your knees slightly bent.\nExtend your arms straight back, keeping your elbows close to your body.\nSlowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/IYn6IPMjmWzK8B",
    "id": 416,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing forward and arms fully extended.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/cT5XEtmPbsbs7l",
    "id": 417,
    "target": "calves",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.\nRaise your heels off the ground as high as possible, using your calves.\nPause for a moment at the top, then slowly lower your heels back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Dz7mBiJbZjSN6d",
    "id": 418,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in one hand, with your arm fully extended and palm facing inwards.\nPlace your opposite hand on your thigh for support.\nKeeping your upper arm stationary, exhale and curl the dumbbell towards your shoulder by contracting your biceps.\nContinue to raise the dumbbell until your biceps are fully contracted and the dumbbell is at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/QA3FOn7eKc7PR4",
    "id": 419,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with an overhand grip.\nKeep your arms straight and lift the dumbbells in front of you, raising them above your head.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ud1xlWohOoMy0L",
    "id": 2321,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your torso.\nKeep your elbows close to your torso and rotate the palms of your hands until they are facing forward.\nWhile holding your upper arms stationary, curl the weights while contracting your biceps.\nContinue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nSlowly begin to bring the dumbbells back to the starting position as your breathe in.\nRepeat for the recommended amount of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/mq3pb2XKWF5Ieg",
    "id": 420,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nExtend your arms straight back, squeezing your triceps at the top of the movement.\nPause for a moment, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/lR2xbnL0S65IWi",
    "id": 421,
    "target": "biceps",
    "instructions": "Stand up straight with your feet shoulder-width apart and hold a dumbbell in one hand, palm facing up.\nPlace your free hand on your thigh for support.\nKeeping your upper arm stationary, exhale and curl the dumbbell towards your shoulder by contracting your biceps.\nContinue to raise the dumbbell until your biceps are fully contracted and the dumbbell is at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Ewtm1hhiOjewCT",
    "id": 422,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in one hand with your palm facing forward.\nPlace your other hand on an incline bench for support.\nKeeping your upper arm stationary, exhale and curl the dumbbell towards your shoulder by contracting your biceps.\nPause for a moment at the top, then inhale and slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/hRln7xVknai5Da",
    "id": 1680,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in one hand.\nPlace your other hand on an incline bench for support.\nKeeping your upper arm stationary, curl the dumbbell towards your shoulder by contracting your biceps.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Jjd6E02FFUfu8M",
    "id": 423,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in one hand.\nRaise the dumbbell overhead, fully extending your arm.\nKeep your upper arm close to your head and perpendicular to the ground.\nSlowly lower the dumbbell behind your head, bending your elbow.\nPause for a moment, then raise the dumbbell back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/OTNzfAHapNUZ-g",
    "id": 424,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in one hand at shoulder height with your palm facing inwards.\nEngage your core and keep your back straight.\nPress the dumbbell upwards until your arm is fully extended.\nPause for a moment at the top, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/iU32XHEFzQgNEB",
    "id": 425,
    "target": "biceps",
    "instructions": "Stand up straight with your feet shoulder-width apart and hold a dumbbell in one hand with an overhand grip.\nKeep your arm fully extended and close to your body, with your palm facing down.\nSlowly curl the dumbbell up towards your shoulder, keeping your upper arm stationary.\nPause for a moment at the top, then slowly lower the dumbbell back down to the starting position.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/A8mJ2-j632ytkU",
    "id": 426,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder level with your palms facing forward.\nPress the dumbbells upward until your arms are fully extended overhead.\nPause for a moment at the top, then slowly lower the dumbbells back down to shoulder level.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Gbr8ED-rCZ8QEa",
    "id": 427,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder level with your palms facing inwards.\nKeeping your core engaged and your back straight, press the dumbbells upwards until your arms are fully extended overhead.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/koYgWfFjnjZWoz",
    "id": 428,
    "target": "biceps",
    "instructions": "Stand upright with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing forward.\nRest the back of your upper arms against the preacher bench or an incline bench, with your elbows slightly bent.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps.\nContinue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Vn5iWKcLtChEXe",
    "id": 429,
    "target": "biceps",
    "instructions": "Stand up straight with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing your body.\nKeeping your upper arms stationary, exhale and curl the weights while contracting your biceps. Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.\nHold the contracted position for a brief pause as you squeeze your biceps.\nInhale and slowly begin to lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/jUMbWBUUI3GZrB",
    "id": 430,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in one hand.\nRaise the dumbbell overhead, keeping your arm straight.\nBend your elbow and lower the dumbbell behind your head, keeping your upper arm stationary.\nExtend your arm back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/M4qEmvYuDgMpuK",
    "id": 2293,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing forward.\nPlace your upper arms against the preacher bench and keep your elbows slightly bent.\nCurl the dumbbells up towards your shoulders while keeping your upper arms stationary.\nAt the top of the movement, rotate your wrists so that your palms are facing downward.\nSlowly lower the dumbbells back to the starting position, rotating your wrists back to the starting position as well.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/qHLrrSASRbhQHY",
    "id": 1684,
    "target": "biceps",
    "instructions": "Stand in front of a step or platform with a dumbbell in each hand, palms facing your body.\nPlace your right foot on the step, ensuring your entire foot is in contact with the surface.\nEngage your core and push through your right heel to lift your body up onto the step, bringing your left knee up towards your chest.\nAt the top of the movement, perform a bicep curl by bending your elbows and bringing the dumbbells towards your shoulders.\nLower the dumbbells back down and simultaneously lower your left foot back to the ground.\nRepeat the movement on the opposite side, stepping up with your left foot and curling the dumbbells.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ur5gGc0h2ff-E7",
    "id": 431,
    "target": "glutes",
    "instructions": "Stand in front of a bench or step with a dumbbell in each hand, palms facing your body.\nPlace your right foot on the bench or step, ensuring your entire foot is in contact with the surface.\nPush through your right heel and lift your body up onto the bench or step, straightening your right leg.\nBring your left foot up onto the bench or step, standing fully upright.\nStep back down with your left foot, followed by your right foot, returning to the starting position.\nRepeat for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/V010-yfD3dbJRo",
    "id": 2796,
    "target": "quads",
    "instructions": "Stand in front of a step or platform with a dumbbell in each hand, palms facing your sides.\nPlace your right foot on the step, ensuring your entire foot is on the surface.\nPush through your right heel and lift your body up onto the step, bringing your left foot up as well.\nOnce both feet are on the step, lower your left foot back down to the starting position, keeping your right foot on the step.\nRepeat the movement, alternating which foot you step up with each time.\nContinue for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/ZI8aEEHc7Mcswe",
    "id": 2812,
    "target": "quads",
    "instructions": "Stand in front of a bench or step with a dumbbell in each hand, palms facing your body.\nPlace your right foot on the bench or step, ensuring your entire foot is in contact with the surface.\nStep up onto the bench or step with your right foot, pushing through your heel to lift your body up.\nAs you step up, simultaneously lift your left knee towards your chest.\nPause at the top of the movement, then slowly lower your left foot back to the ground while keeping your right foot on the bench or step.\nRepeat the movement with your left foot on the bench or step.\nContinue alternating between your right and left foot for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/7R05p-WYJxEwYR",
    "id": 432,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with an overhand grip.\nKeeping your back straight and your core engaged, hinge at the hips and lower the dumbbells towards the ground, allowing a slight bend in your knees.\nLower the dumbbells until you feel a stretch in your hamstrings, then squeeze your glutes and push through your heels to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Du5e2m0rNrtWSu",
    "id": 433,
    "target": "pectorals",
    "instructions": "Lie flat on a bench with your head at one end and your feet planted firmly on the ground.\nHold a dumbbell with both hands and extend your arms straight above your chest.\nKeeping your arms straight, slowly lower the dumbbell behind your head in an arc-like motion.\nPause for a moment, then raise the dumbbell back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/vmJJjC7X7sW5WT",
    "id": 434,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with an overhand grip.\nKeeping your back straight and your core engaged, hinge at the hips and lower the dumbbells towards the ground, allowing your torso to lean forward.\nContinue lowering the dumbbells until you feel a stretch in your hamstrings, keeping your knees slightly bent.\nPause for a moment at the bottom, then engage your glutes and hamstrings to lift your torso back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Be7jiXKGpa0O5M",
    "id": 2808,
    "target": "glutes",
    "instructions": "Stand with your feet wider than shoulder-width apart, toes pointed outwards.\nHold a dumbbell with both hands in front of your body, arms extended.\nBend your knees and lower your hips down into a squat position, keeping your back straight.\nLower the dumbbell down between your legs, keeping your arms straight.\nDrive through your heels and extend your hips forward, pulling the dumbbell up and in front of your body.\nSqueeze your glutes at the top of the movement, then lower the dumbbell back down between your legs.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/mLsYPW7qBPfI4R",
    "id": 2803,
    "target": "quads",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at your sides.\nKeeping your chest up and core engaged, slowly lower your body down by bending your knees and pushing your hips back.\nContinue lowering until your thighs are parallel to the ground, or as low as you can comfortably go.\nPause for a moment at the bottom, then push through your heels to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/CHJeK8EdkuQqih",
    "id": 436,
    "target": "triceps",
    "instructions": "Sit on a flat bench with a dumbbell in each hand, palms facing each other.\nRaise the dumbbells to shoulder height, then rotate your wrists so that your palms are facing away from you.\nPress the dumbbells up until your arms are fully extended, then lower them back down to shoulder height.\nRotate your wrists back to the starting position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/DJ3nWNna84emY5",
    "id": 1742,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in your right hand.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nBring your right elbow up to your side, keeping it bent at a 90-degree angle.\nExtend your right arm straight back, squeezing your triceps.\nPause for a moment, then slowly lower the dumbbell back to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/SsouXrDjTMNNNh",
    "id": 1743,
    "target": "triceps",
    "instructions": "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.\nHold a dumbbell in each hand with an overhand grip, palms facing away from you.\nExtend your arms straight up over your chest, keeping a slight bend in your elbows.\nLower the dumbbells down towards your chest, keeping your elbows close to your body.\nAs you lower the dumbbells, twist your wrists so that your palms face towards you at the bottom of the movement.\nPause for a moment at the bottom, then reverse the movement by pressing the dumbbells back up to the starting position.\nAs you press the dumbbells up, twist your wrists back to the starting position with palms facing away from you.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/slfX3jBO31lk-p",
    "id": 437,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with an overhand grip.\nLet the dumbbells hang in front of your thighs, with your arms fully extended.\nKeeping your back straight and your core engaged, exhale and lift the dumbbells straight up towards your chin, leading with your elbows.\nPause for a moment at the top, then inhale and slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/xsCk7bj7NsYLv5",
    "id": 1765,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with an overhand grip.\nLet the dumbbells hang in front of your thighs, with your arms fully extended and your palms facing your body.\nKeeping your back straight and your core engaged, exhale and lift the dumbbells straight up towards your chin, leading with your elbows.\nContinue lifting until the dumbbells are at shoulder height, with your elbows pointing out to the sides.\nPause for a moment at the top, then inhale and slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/WlTrwV626kEGCg",
    "id": 864,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in each hand with your palms facing your body.\nRaise your arms out to the sides until they are parallel to the ground, keeping your elbows slightly bent.\nRotate your arms externally, bringing the dumbbells up towards your head while keeping your elbows in the same position.\nPause for a moment at the top, then slowly lower the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/jwoPeOoNuTjsb2",
    "id": 5201,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing forward.\nKeep your upper arms close to your body and your elbows tucked in.\nSlowly curl the dumbbells up towards your shoulders, keeping your wrists straight.\nPause for a moment at the top, then slowly lower the dumbbells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/cZmAN7nc3mVp1t",
    "id": 438,
    "target": "delts",
    "instructions": "Sit on a bench with a dumbbell in each hand, palms facing forward.\nRaise the dumbbells to shoulder height, elbows bent and palms facing forward.\nPress the dumbbells upward until your arms are fully extended overhead.\nLower the dumbbells back to shoulder height.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/BBRZsNvhY5r26F",
    "id": 439,
    "target": "biceps",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your body.\nKeep your elbows close to your torso and rotate your palms to face forward.\nCurl the dumbbells up to your shoulders while keeping your upper arms stationary.\nAt the top of the movement, rotate your wrists so that your palms are facing away from your body.\nSlowly lower the dumbbells back to the starting position, rotating your palms back to facing your body.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/zXss91PtzfuM7l",
    "id": 2294,
    "target": "biceps",
    "instructions": "Sit on a preacher bench with a dumbbell in each hand, palms facing up and elbows resting on the pad.\nCurl the dumbbells up towards your shoulders, keeping your upper arms stationary and your palms facing up.\nAt the top of the curl, rotate your wrists so that your palms are facing down.\nSlowly lower the dumbbells back down to the starting position, rotating your wrists back to the starting position as you do so.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/Gt8EZznIII1Ki-",
    "id": 2189,
    "target": "triceps",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a dumbbell in both hands with an overhand grip, and raise it above your head.\nBend your elbows and lower the dumbbell behind your head, keeping your upper arms close to your ears.\nExtend your arms and raise the dumbbell back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/oKN4BuvYZ5b24k",
    "id": 1167,
    "target": "pectorals",
    "instructions": "Stand tall with your feet shoulder-width apart.\nExtend your arms straight out to the sides, parallel to the ground.\nSlowly bring your arms forward, crossing them in front of your body.\nFeel the stretch in your chest muscles.\nHold the stretch for 10-30 seconds.\nReturn to the starting position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/krVPteLHalf9su",
    "id": 3287,
    "target": "triceps",
    "instructions": "Sit on the edge of a bench or chair with your hands gripping the edge next to your hips.\nSlide your hips forward off the bench and straighten your legs, keeping your heels on the ground.\nBend your elbows and lower your body towards the ground, keeping your back close to the bench.\nPause for a moment at the bottom, then push through your hands to straighten your arms and lift your body back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/DLYOCEGH4fRf4a",
    "id": 1772,
    "target": "upper back",
    "instructions": "Start by lying face down on the ground with your legs extended and your hands placed directly under your shoulders.\nEngage your core and press through your palms to lift your upper body off the ground, keeping your elbows close to your sides.\nPause at the top for a moment, squeezing your upper back muscles.\nSlowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Xr0r8ULGSsvJrX",
    "id": 443,
    "target": "abs",
    "instructions": "Start by lying flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngage your abs and lift your upper body off the ground, bringing your right elbow towards your left knee.\nAt the same time, bring your left knee towards your right elbow, creating a twisting motion.\nPause for a moment at the top, then slowly lower your upper body and extend your legs back to the starting position.\nRepeat the movement, this time bringing your left elbow towards your right knee and your right knee towards your left elbow.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/9iMKU0KE9gCom6",
    "id": 3292,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart and your knees slightly bent.\nPlace your hands on your hips or cross them in front of your chest.\nKeeping your back straight, slowly bend forward at the waist, lowering your upper body towards the ground.\nPause for a moment at the bottom, then slowly raise your upper body back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/IvDV0Uus9oevVh",
    "id": 1332,
    "target": "lats",
    "instructions": "Sit on the stability ball with your feet flat on the ground and your back straight.\nHold a dumbbell in each hand with your palms facing inwards and your arms extended down by your sides.\nEngage your core and slowly lift one arm up towards your shoulder, keeping your elbow slightly bent.\nPause for a moment at the top, then slowly lower your arm back down to the starting position.\nRepeat the movement with the other arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/3RufjVnzYfDmFl",
    "id": 1333,
    "target": "spine",
    "instructions": "Place the stability ball on the ground and lie face down on top of it, with your hips resting on the ball and your feet against a wall for stability.\nExtend your arms straight out in front of you, with your palms facing down.\nEngage your core and slowly lift your upper body off the ball, keeping your back straight and your neck in line with your spine.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/OYBJywWNztp0N0",
    "id": 1334,
    "target": "spine",
    "instructions": "Place the stability ball on the ground and lie face down on top of it with your hips resting on the ball.\nPosition your feet against a wall or other stable surface for support.\nCross your arms behind your head, with your hands touching the back of your head.\nEngage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your hips.\nPause for a moment at the top of the movement, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/ougwr3A2SQog9Q",
    "id": 1335,
    "target": "spine",
    "instructions": "Place the stability ball on the ground and lie face down on top of it, with your hips resting on the ball and your feet against a wall for stability.\nPosition your hands behind your head or crossed over your chest.\nEngage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your heels.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/sXpypJIkOj0h7p",
    "id": 1336,
    "target": "spine",
    "instructions": "Start by lying face down on the stability ball with your hips resting on the ball and your feet firmly planted on the ground.\nPlace your hands behind your head or cross them over your chest.\nEngage your core and slowly lift your upper body off the ball, extending your back until your body forms a straight line from your head to your heels.\nPause for a moment at the top, then slowly rotate your torso to one side, keeping your hips and legs stable.\nReturn to the center and repeat the rotation to the other side.\nLower your upper body back down to the starting position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/gsGjOKr455V2dZ",
    "id": 1744,
    "target": "triceps",
    "instructions": "Sit on the stability ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nPlace your hands on the ball beside your hips, fingers pointing forward.\nEngage your triceps and push through your hands to lift your body off the ball, straightening your arms.\nLower your body back down by bending your elbows, keeping them close to your sides.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/vg-C41Tm2QkavC",
    "id": 1559,
    "target": "glutes",
    "instructions": "Place the stability ball on the ground and kneel in front of it.\nPlace your right foot on top of the stability ball, with your knee bent at a 90-degree angle.\nExtend your left leg behind you, keeping it straight.\nLean forward, pushing your hips towards the stability ball, until you feel a stretch in your right hip flexor.\nHold the stretch for 20-30 seconds, then switch sides and repeat."
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/myl9yr5ZbLH3Qk",
    "id": 1338,
    "target": "spine",
    "instructions": "Sit on the stability ball with your feet flat on the ground and your back straight.\nHold the stability ball with both hands, hugging it close to your chest.\nEngage your core muscles and slowly lean back, keeping your back straight and your feet planted on the ground.\nContinue leaning back until you feel a stretch in your back muscles.\nHold the position for a few seconds, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/O-LHzhI3tMNtzV",
    "id": 1339,
    "target": "lats",
    "instructions": "Sit on a stability ball with your feet flat on the ground and your back straight.\nHold a dumbbell in one hand and extend your arm straight up overhead.\nSlowly lean to the opposite side, feeling a stretch in your lat muscle.\nHold the stretch for 20-30 seconds, then return to the starting position.\nRepeat on the other side."
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/uePeamR25WlpQk",
    "id": 1341,
    "target": "lats",
    "instructions": "Sit on the stability ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nSlowly walk your feet forward, rolling the ball down your back until your lower back is resting on the ball.\nPlace your hands behind your head or cross them over your chest.\nEngage your core and slowly lower your upper body towards the ground, allowing your lower back to stretch over the ball.\nHold the stretch for a few seconds, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/HgI6oJpK7g1Sav",
    "id": 1342,
    "target": "lats",
    "instructions": "Lie on your side with your legs extended and your head supported by the stability ball.\nPlace your top arm on the ball for stability.\nReach your top arm overhead and allow your torso to rotate slightly.\nFeel the stretch in your lat muscles on the side of your body.\nHold the stretch for 20-30 seconds, then switch sides and repeat."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/D1xC-P7cV6fEdV",
    "id": 1382,
    "target": "calves",
    "instructions": "Stand with your back against a wall and place an exercise ball between your lower back and the wall.\nPosition your feet shoulder-width apart, with your toes pointing forward.\nHold a dumbbell in each hand, with your arms extended by your sides.\nRaise your heels off the ground, lifting your body weight onto the balls of your feet.\nPause for a moment at the top, then slowly lower your heels back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/JdWZOx-HKqACg9",
    "id": 3241,
    "target": "calves",
    "instructions": "Stand facing a wall with your feet shoulder-width apart.\nPlace an exercise ball between the wall and your lower back.\nHold a dumbbell in each hand, with your arms extended by your sides.\nPlace a tennis ball between your ankles.\nRaise your heels off the ground, lifting your body up onto your toes.\nPause for a moment at the top, then slowly lower your heels back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/uIzOrhsD-JR1dp",
    "id": 3240,
    "target": "calves",
    "instructions": "Stand with your back against a wall and place an exercise ball between your lower back and the wall.\nPosition your feet shoulder-width apart and slightly in front of you.\nHold a dumbbell in each hand, with your arms extended by your sides.\nPlace a tennis ball between your knees.\nRaise your heels off the ground, lifting your body up onto your toes.\nPause for a moment at the top, then slowly lower your heels back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/uDQybtU0FfFbLq",
    "id": 1416,
    "target": "glutes",
    "instructions": "Lie face down on the stability ball with your hips resting on the ball and your legs extended straight behind you.\nPlace your hands on the ground in front of you for support.\nEngage your glutes and core muscles to stabilize your body.\nSlowly lift one leg off the ground, keeping it straight and parallel to the floor.\nRotate your leg outward, away from your body, while keeping your hips and upper body stable.\nPause for a moment at the end of the rotation, then slowly return your leg to the starting position.\nRepeat the rotation with the other leg.\nContinue alternating legs for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/tobWt35g9G3hVw",
    "id": 1417,
    "target": "glutes",
    "instructions": "Start by lying on your back with your legs extended and your heels resting on top of the stability ball.\nPlace your arms by your sides for stability.\nEngage your glutes and core muscles to lift your hips off the ground, creating a straight line from your shoulders to your heels.\nBend your right knee and bring it towards your chest, keeping your left leg extended and your foot flexed.\nKick your right leg diagonally across your body, extending it fully and engaging your hamstrings.\nSlowly return your right leg to the starting position, maintaining control and stability.\nRepeat the movement with your left leg, alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/QDAClfl1I9REhy",
    "id": 1296,
    "target": "pectorals",
    "instructions": "Start in a push-up position with your hands on the floor and your shins resting on the stability ball.\nEngage your core and lift your hips up towards the ceiling, rolling the ball towards your hands.\nKeep your legs straight and your body in a pike position, forming an inverted V shape.\nBend your elbows and lower your upper body towards the floor, keeping your head in line with your hands.\nPush through your hands and extend your arms to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/ASLs3FjcAdtknF",
    "id": 1343,
    "target": "spine",
    "instructions": "Lie face down on a mat with your legs extended and your toes resting on top of the stability ball.\nPlace your hands on the ground, shoulder-width apart, and engage your core muscles.\nKeeping your legs straight, slowly lift them off the ground, using your lower back and glutes to raise them as high as possible.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/hxXTSCphbdl4fh",
    "id": 1560,
    "target": "hamstrings",
    "instructions": "Sit on the stability ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nSlowly roll the ball forward, walking your feet out until your upper back is resting on the ball and your legs are extended straight in front of you.\nPlace your hands on your hips for support.\nEngage your core and slowly lower your upper body towards the ground, keeping your back straight and your chest lifted.\nStop when you feel a stretch in your hamstrings, and hold the position for 20-30 seconds.\nSlowly return to the starting position by pushing through your heels and using your hamstrings to pull yourself back up.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/EvItGLg1G2i3BY",
    "id": 1745,
    "target": "triceps",
    "instructions": "Sit on a stability ball with your feet flat on the ground and your back straight.\nHold a dumbbell in one hand and extend your arm straight up above your head.\nBend your elbow and lower the dumbbell behind your head, keeping your upper arm close to your ear.\nHold the stretch for a few seconds, then return to the starting position.\nRepeat with the other arm."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/CMu6umGRyziZv6",
    "id": 1746,
    "target": "triceps",
    "instructions": "Sit on an exercise ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nHold a dumbbell with both hands and extend your arms straight up towards the ceiling.\nSlowly lower the dumbbell behind your head, keeping your elbows close to your ears.\nPause for a moment, then raise the dumbbell back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/sFagl-hcViPOoq",
    "id": 2133,
    "target": "quads",
    "instructions": "Stand up straight with a dumbbell in each hand, palms facing your sides.\nKeep your back straight and your shoulders back.\nTake small, controlled steps forward, maintaining an upright posture.\nContinue walking for the desired distance or time.\nTo finish, stop walking and carefully lower the dumbbells to your sides."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/qvRjqStuHqVE85",
    "id": 3303,
    "target": "abs",
    "instructions": "Start by gripping a vertical pole with both hands, palms facing each other, and arms fully extended.\nEngage your core and lift your legs off the ground, keeping them straight.\nUsing your core and upper body strength, raise your legs until they are parallel to the ground.\nHold this position for as long as you can, maintaining a straight body line.\nSlowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/cJYm956mfU8tRU",
    "id": 456,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nAt the same time, lift your legs off the ground, bending your knees and bringing them towards your chest.\nPause for a moment at the top, then slowly lower your upper body and legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/rX45DRsYIhvypE",
    "id": 457,
    "target": "abs",
    "instructions": "Lie flat on your back with your legs extended and arms straight above your head.\nEngaging your abs, lift your upper body off the ground while simultaneously lifting your legs towards your chest.\nReach your hands towards your toes as you lift your upper body and legs.\nPause for a moment at the top, then slowly lower your upper body and legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/4pp6NxmwUoAtpR",
    "id": 459,
    "target": "glutes",
    "instructions": "Lie flat on your back with your legs extended and your hands by your sides.\nEngage your core and lift your legs off the ground about 6 inches.\nKeeping your legs straight, alternate lifting one leg slightly higher than the other.\nContinue this fluttering motion for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/k6lpGEa-0waTqO",
    "id": 1472,
    "target": "quads",
    "instructions": "Stand with your feet shoulder-width apart.\nBend your knees and lower your body into a squat position.\nSwing your arms back for momentum.\nJump forward explosively, extending your hips, knees, and ankles.\nLand softly on the balls of your feet and immediately go into the next jump.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/I0fhHrhgbmolNe",
    "id": 3470,
    "target": "glutes",
    "instructions": "Stand with your feet hip-width apart and hands on your hips.\nTake a big step forward with your right foot, lowering your body into a lunge position.\nBend your right knee to about 90 degrees, keeping your knee aligned with your ankle.\nPush off with your right foot and return to the starting position.\nRepeat with your left leg, alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/joGsk4PvpCGuaQ",
    "id": 2429,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ZVQlRSmDmMnDie",
    "id": 3301,
    "target": "abs",
    "instructions": "Start in a push-up position with your hands shoulder-width apart and your feet together.\nBend your elbows and lower your body towards the ground, keeping your back straight.\nAs you lower your body, lift your feet off the ground and bring your knees towards your chest.\nHold this position for a few seconds, then extend your legs back out and push yourself back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/F97aH2meMJzTb4",
    "id": 3296,
    "target": "abs",
    "instructions": "Start by hanging from a pull-up bar with an overhand grip, hands shoulder-width apart.\nEngage your core and pull your shoulder blades down and back.\nBend your knees and tuck them towards your chest.\nSimultaneously, lift your legs up and extend them straight out in front of you, keeping your body parallel to the ground.\nHold this position for as long as you can, aiming for a full front lever position.\nTo release, slowly lower your legs back down and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/-wyGjVClWFDq7g",
    "id": 3295,
    "target": "upper back",
    "instructions": "Hang from a pull-up bar with an overhand grip, palms facing away from you.\nEngage your core and pull your shoulder blades down and back.\nKeeping your body straight, lift your legs up until they are parallel to the ground.\nHold this position for as long as you can, aiming for 10-20 seconds.\nSlowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/2XeszR0pxJH2aV",
    "id": 464,
    "target": "abs",
    "instructions": "Start in a high plank position with your hands directly under your shoulders and your body in a straight line from head to toe.\nEngage your core and glutes to maintain a stable position.\nRotate your torso to the right, lifting your right arm and extending it towards the ceiling.\nKeep your hips and legs stable as you twist.\nHold for a moment, then return to the starting position.\nRepeat the twist on the left side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/HZddmoN8dUd9k2",
    "id": 3315,
    "target": "abs",
    "instructions": "Start by standing with your feet shoulder-width apart and your arms extended straight out to the sides.\nSlowly lean forward, keeping your arms straight, until your upper body is parallel to the ground.\nEngage your core and hold this position for a few seconds.\nReturn to the starting position by pushing through your feet and standing back up.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/FoY0fX-ACRlzvP",
    "id": 3299,
    "target": "abs",
    "instructions": "Start in a push-up position with your hands shoulder-width apart and your fingers pointing forward.\nEngage your core and slowly shift your weight forward, lifting your feet off the ground.\nContinue shifting your weight forward until your body is parallel to the ground, balancing on your hands.\nHold this position for as long as you can, maintaining a straight body line.\nSlowly lower your feet back to the ground and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/PsPeFEhB2s204B",
    "id": 3327,
    "target": "pectorals",
    "instructions": "Start in a push-up position with your hands placed slightly wider than shoulder-width apart.\nEngage your core and lower your body down towards the ground, keeping your elbows close to your sides.\nAs you lower yourself, lean your body forward and lift your feet off the ground, balancing on your hands.\nContinue to lower your body until your chest is just above the ground.\nPush through your hands and extend your arms to lift your body back up to the starting position.\nMaintain a straight line from your head to your heels throughout the movement.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/A2OI62BvSzUTmn",
    "id": 466,
    "target": "lats",
    "instructions": "Stand facing a high bar with your feet shoulder-width apart.\nReach up and grab the bar with an overhand grip, slightly wider than shoulder-width apart.\nHang from the bar with your arms fully extended and your body straight.\nEngage your lats and biceps to pull your chest up towards the bar, leading with your sternum.\nPause for a moment at the top, then slowly lower yourself back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Lk1pLvGZwLoRY9",
    "id": 3561,
    "target": "glutes",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nEngage your glutes and lift your hips off the ground, forming a straight line from your knees to your shoulders.\nWhile keeping your hips lifted, lift one foot off the ground and bring your knee towards your chest.\nLower your foot back to the ground and repeat the movement with the other leg.\nContinue alternating legs in a marching motion while maintaining the bridge position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/xFmLJ9AnFUohff",
    "id": 3523,
    "target": "glutes",
    "instructions": "Sit on the edge of a bench with your back against it and your feet flat on the ground.\nPlace your hands on the bench beside your hips for support.\nEngage your glutes and hamstrings, then lift your hips off the bench until your body forms a straight line from your knees to your shoulders.\nPause for a moment at the top, then slowly lower your hips back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/SdAOMOHMXmYdh1",
    "id": 3193,
    "target": "hamstrings",
    "instructions": "Adjust the glute-ham raise machine to fit your body.\nPosition yourself face down on the machine with your ankles secured.\nPlace your hands on your chest or cross them over your chest.\nEngage your hamstrings and glutes to lift your upper body up towards the ceiling.\nContinue lifting until your body is in a straight line from your head to your heels.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/wyJqnM3do33im2",
    "id": 467,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart and your knees slightly bent.\nGrasp a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.\nHang from the bar with your arms fully extended and your palms facing away from you.\nEngage your core and pull your body up towards the bar, bringing your chin above the bar.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/MyUPaAE3pFVIZn",
    "id": 469,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, lift your legs off the ground, bringing your knees towards your chest.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/6FZy6bez0e6Mnw",
    "id": 3221,
    "target": "cardiovascular system",
    "instructions": "Stand with your feet shoulder-width apart.\nBend your knees and lower your body down as if you were sitting back into a chair.\nKeep your chest up and your weight in your heels.\nPause for a moment at the bottom, then push through your heels to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/7COdvxJB7DNxkm",
    "id": 3202,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ZY0z-iQK5BS0sC",
    "id": 1511,
    "target": "hamstrings",
    "instructions": "Stand with your feet shoulder-width apart.\nStep forward with your right foot and shift your weight onto your right leg.\nKeeping your back straight, slowly bend forward at the hips, reaching towards your right foot with both hands.\nHold the stretch for 20-30 seconds, then return to the starting position.\nRepeat on the other side."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/smvZ4MuUaLc-7w",
    "id": 3218,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart and your hands clasped together in front of your chest.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nLower your hands towards your toes in a circular motion, reaching as far as you can without straining.\nPause for a moment at the bottom, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/3CbEo7aO9RPaqQ",
    "id": 3215,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart and your arms extended to the sides.\nBend forward at the waist, keeping your back straight and your knees slightly bent.\nReach down with your hands and clasp them together behind your legs.\nSlowly raise your hands up and over your head in a circular motion, keeping your legs straight.\nContinue the circular motion until your hands touch your toes.\nReverse the motion and bring your hands back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/AdPzdxHEj2I4ft",
    "id": 3302,
    "target": "triceps",
    "instructions": "Find an open space with enough room to perform a handstand.\nPlace your hands on the ground shoulder-width apart, fingers pointing forward.\nKick your legs up towards the wall, using your core and shoulders to maintain balance.\nOnce in a handstand position, engage your triceps to support your body weight.\nHold the handstand for as long as you can maintain balance.\nTo come down, slowly lower your legs back to the ground.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/uKVrCdQqSeMRmE",
    "id": 471,
    "target": "triceps",
    "instructions": "Find a wall and face away from it, standing a few feet away.\nPlace your hands on the ground shoulder-width apart and kick your feet up against the wall, coming into a handstand position.\nBend your elbows and lower your head towards the ground, keeping your body in a straight line.\nPush through your hands and extend your arms to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/vAIYrfsvXA-sUn",
    "id": 1764,
    "target": "abs",
    "instructions": "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.\nEngage your core and lift your legs up by flexing your hips and knees until your thighs are parallel to the ground.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/vSJx048bCMrdph",
    "id": 472,
    "target": "abs",
    "instructions": "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.\nEngage your core and lift your legs up in front of you, keeping them straight.\nContinue lifting until your legs are parallel to the ground or as high as you can comfortably go.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/hloEYF3tcRh5eW",
    "id": 1761,
    "target": "abs",
    "instructions": "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.\nEngage your core and lift your knees towards your chest, twisting your torso to the side as you do so.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat on the other side, twisting your torso in the opposite direction.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/N1eDHdIsRiVtgp",
    "id": 473,
    "target": "abs",
    "instructions": "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.\nEngage your core and lift your legs up towards the bar, keeping them straight.\nContinue lifting until your body forms a 'V' shape, with your legs parallel to the ground.\nHold the position for a moment, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ZVg4AyeaTnXKGo",
    "id": 474,
    "target": "abs",
    "instructions": "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.\nEngage your core and lift your legs up in front of you until they are parallel to the ground.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/vUZHXOHErFHRUw",
    "id": 475,
    "target": "abs",
    "instructions": "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.\nEngage your core and lift your legs up in front of you, keeping them straight.\nContinue lifting until your legs are parallel to the ground or as high as you can comfortably go.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/qitRa51V4Mp6QG",
    "id": 476,
    "target": "abs",
    "instructions": "Hang from a pull-up bar with your arms fully extended and your legs straight.\nEngage your core and lift your legs up towards your chest, keeping them straight.\nOnce your legs are parallel to the ground, twist your hips to one side, bringing your legs towards that side.\nPause for a moment, then return to the starting position.\nRepeat the movement, but this time twist your hips to the opposite side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/BfPZvQqJ1Qzgv0",
    "id": 3636,
    "target": "cardiovascular system",
    "instructions": "Stand facing a wall with your feet hip-width apart.\nPlace your hands on the wall for support.\nEngage your core and lift your right knee up towards your chest, while keeping your left foot on the ground.\nQuickly switch legs, bringing your left knee up towards your chest and lowering your right foot back down.\nContinue alternating legs in a running motion, bringing your knees up as high as possible.\nMaintain a fast pace and keep your upper body stable throughout the exercise.\nRepeat for the desired duration or number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/V4pmymu3TgE8pX",
    "id": 484,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands by your sides, palms facing down.\nEngage your core and glutes, then lift your hips off the ground until your body forms a straight line from your knees to your shoulders.\nPause for a moment at the top, then slowly lower your hips back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/8QE-9nxcf4lIGb",
    "id": 1418,
    "target": "glutes",
    "instructions": "Start by standing with your feet shoulder-width apart.\nBend your knees and lower your body down into a squat position.\nAs you squat down, bring your knees up towards your chest and hug them with your arms.\nHold this position for a moment, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/B4IFFCTdKl2oQ6",
    "id": 3234,
    "target": "pectorals",
    "instructions": "Lie flat on a bench with a dumbbell in each hand, palms facing each other.\nExtend your arms straight up over your chest, with a slight bend in your elbows.\nKeeping a slight bend in your elbows, lower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest.\nPause for a moment, then reverse the movement and bring the dumbbells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/MOPxC7V5XtdapS",
    "id": 489,
    "target": "spine",
    "instructions": "Adjust the hyperextension bench so that your upper thighs are resting on the pad and your feet are secured.\nCross your arms over your chest or place your hands behind your head.\nLower your upper body towards the ground while keeping your back straight.\nPause for a moment at the bottom, then raise your upper body back up until it is in line with your legs.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/V5S8YP9OIdXd48",
    "id": 488,
    "target": "spine",
    "instructions": "Adjust the hyperextension bench so that your hips are resting comfortably on the pad and your feet are secured.\nCross your arms over your chest or place your hands behind your head.\nSlowly lower your upper body towards the ground while keeping your back straight.\nPause for a moment at the bottom, then raise your upper body back up until it is in line with your legs.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/1TG06m8BZDPVaM",
    "id": 3289,
    "target": "triceps",
    "instructions": "Position yourself between two parallel bars with your arms fully extended and your body suspended in the air.\nBend your knees and cross your ankles.\nLower your body by bending your elbows until your upper arms are parallel to the ground.\nPause for a moment, then push yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/I7V-HzgEGmh9BM",
    "id": 1471,
    "target": "abs",
    "instructions": "Start in a standing position with your feet hip-width apart.\nBend forward at the waist and place your hands on the ground in front of you.\nWalk your hands forward until you are in a high plank position, with your body in a straight line from head to toe.\nPause for a moment, then walk your hands back towards your feet, keeping your legs as straight as possible.\nOnce your hands reach your feet, stand back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/nj5JIBg3CU4RAl",
    "id": 3698,
    "target": "abs",
    "instructions": "Start in a standing position with your feet hip-width apart.\nBend forward at the waist and place your hands on the ground in front of you.\nWalk your hands forward until you are in a high plank position, with your body in a straight line from head to toe.\nKeeping your legs straight, walk your feet towards your hands, bringing your hips up towards the ceiling.\nContinue walking your hands forward, repeating the movement for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/N7FiKIRW0yHDHj",
    "id": 490,
    "target": "triceps",
    "instructions": "Place your hands on an elevated surface, such as a bench or step, slightly wider than shoulder-width apart.\nExtend your legs behind you, resting on the balls of your feet, with your body forming a straight line from head to heels.\nLower your chest towards the elevated surface by bending your elbows, keeping them close to your sides.\nPause for a moment at the bottom, then push yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/bDpPzsbVBLeFaU",
    "id": 491,
    "target": "abs",
    "instructions": "Lie on an incline bench with your back flat against the bench and your legs extended straight out in front of you.\nPlace your hands on the sides of the bench for support.\nEngaging your abs, lift your legs off the bench, raising them as high as you can while keeping them straight.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/XuUr4oLGp5nvqk",
    "id": 492,
    "target": "pectorals",
    "instructions": "Find an elevated surface, such as a bench or step, and place your hands shoulder-width apart on the edge.\nStep your feet back, keeping your body in a straight line from head to heels.\nLower your chest towards the edge of the surface, bending your elbows and keeping your body aligned.\nPush through your palms to extend your arms and return to the starting position.\nJump off the edge of the surface, landing softly with your knees slightly bent.\nRepeat the push-up and depth jump for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ToMPdgHxzf6EmI",
    "id": 493,
    "target": "pectorals",
    "instructions": "Place your hands on an elevated surface, such as a bench or step, slightly wider than shoulder-width apart.\nExtend your legs behind you, resting on the balls of your feet, creating a straight line from your head to your heels.\nLower your chest towards the elevated surface by bending your elbows, keeping your body in a straight line.\nPause for a moment at the bottom, then push yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/3vBFFs6Av8ZeG3",
    "id": 3785,
    "target": "pectorals",
    "instructions": "Place your hands on the edge of a box or elevated surface, slightly wider than shoulder-width apart.\nExtend your legs behind you, resting on the balls of your feet, creating a straight line from your head to your heels.\nLower your chest towards the box by bending your elbows, keeping your body in a straight line.\nPause for a moment at the bottom, then push yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/u5iFWyY0dyU0Y1",
    "id": 494,
    "target": "pectorals",
    "instructions": "Place your hands on the edge of a bench or elevated surface, slightly wider than shoulder-width apart.\nExtend your legs behind you, resting on the balls of your feet, creating a straight line from your head to your heels.\nLower your chest towards the bench by bending your elbows, keeping them close to your sides.\nPause for a moment at the bottom, then push yourself back up to the starting position by extending your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/OV3cdl5AHNMkju",
    "id": 3011,
    "target": "serratus anterior",
    "instructions": "Set up an incline bench at a 45-degree angle.\nPlace your hands on the bench slightly wider than shoulder-width apart.\nPosition your feet on the ground, hip-width apart.\nLower your chest towards the bench, keeping your elbows tucked in.\nAs you lower, retract your shoulder blades, squeezing your scapulae together.\nPush through your palms to extend your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/kwIjYYk3JQ4GGQ",
    "id": 495,
    "target": "abs",
    "instructions": "Set up an incline bench at a 45-degree angle.\nLie down on the bench with your feet secured under the foot pads.\nPlace your hands behind your head or across your chest.\nEngage your abs and lift your upper body off the bench, curling forward.\nAs you curl up, twist your torso to one side, bringing your elbow towards the opposite knee.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat the movement, this time twisting your torso to the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/4C07da7Ey7GLh8",
    "id": 496,
    "target": "hamstrings",
    "instructions": "Lie face down on a bench with your hips at the edge and your legs extended straight behind you.\nHold onto the bench for support.\nKeeping your upper body still, bend your knees and curl your legs towards your glutes.\nPause for a moment at the top, then slowly extend your legs back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ocJHkOy-KAJIsi",
    "id": 2400,
    "target": "hamstrings",
    "instructions": "Adjust the cable machine so that the ankle straps are at the lowest setting.\nLie face down on the bench with your legs extended and the ankle straps attached to your feet.\nHold onto the handles of the bench for stability.\nBend your knees and curl your legs towards your glutes, squeezing your hamstrings.\nPause for a moment at the top of the movement, then slowly lower your legs back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/aY4If9TSc1LnI-",
    "id": 499,
    "target": "upper back",
    "instructions": "Set up a bar at waist height or use a suspension trainer.\nStand facing the bar or suspension trainer, with your feet shoulder-width apart.\nGrab the bar or handles with an overhand grip, slightly wider than shoulder-width apart.\nLean back, keeping your body straight and your heels on the ground.\nPull your chest towards the bar or handles, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower yourself back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/uOBJFxEwuQyAK7",
    "id": 2300,
    "target": "upper back",
    "instructions": "Set up a bar at waist height and lie underneath it.\nGrab the bar with an overhand grip, slightly wider than shoulder-width apart.\nPosition your body so that your heels are on the ground and your body is straight.\nPull your chest up towards the bar by squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Vu7Hg-tc8rr7tM",
    "id": 2298,
    "target": "upper back",
    "instructions": "Set up a bench at a height that allows your body to hang freely underneath it.\nLie face up on the ground with your head towards the bench.\nReach up and grab the bench with an overhand grip, slightly wider than shoulder-width apart.\nPosition your body so that your heels are on the ground and your arms are fully extended.\nEngage your core and squeeze your shoulder blades together as you pull your chest up towards the bench.\nPause for a moment at the top of the movement, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Sqf9JV0t57dh5n",
    "id": 497,
    "target": "upper back",
    "instructions": "Set up a bar at waist height on a Smith machine or use a suspension trainer.\nStand facing the bar or suspension trainer and grab it with an overhand grip, hands shoulder-width apart.\nWalk your feet forward, leaning back until your body is at a slight angle.\nKeep your body straight and pull your chest up towards the bar or handles, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower yourself back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Esx4Ty1U2veRHH",
    "id": 498,
    "target": "upper back",
    "instructions": "Set up a suspension trainer or straps at chest height.\nStand facing the anchor point and grab the handles with an overhand grip.\nWalk your feet forward, leaning back until your body is at an angle.\nKeep your body straight and engage your core.\nPull your chest towards the handles, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower yourself back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/qAvHxUhnJqZSoV",
    "id": 1419,
    "target": "glutes",
    "instructions": "Lie flat on your back with your arms extended out to the sides.\nRaise your legs up towards the ceiling, keeping them straight.\nSlowly lower your legs to one side, aiming to touch the floor with your feet.\nHold the stretch for a few seconds, then return your legs to the starting position.\nRepeat the stretch on the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/dY1kwteHMIjPIB",
    "id": 1297,
    "target": "pectorals",
    "instructions": "Stand with your feet shoulder-width apart and your knees slightly bent.\nExtend your arms straight out in front of you, parallel to the ground, with your palms facing each other.\nSqueeze your chest muscles together as hard as you can, while keeping your arms straight.\nHold this position for a few seconds, focusing on contracting your chest muscles.\nRelease the squeeze and relax your chest muscles.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/33lJyKKngwIBps",
    "id": 500,
    "target": "pectorals",
    "instructions": "Start by lying flat on your back on a mat or bench.\nExtend your arms straight out to the sides, perpendicular to your body.\nEngage your core and lift both legs off the ground, keeping them together and straight.\nSlowly lower your legs to one side, aiming to touch the ground with your feet while maintaining control.\nPause for a moment, then use your core to lift your legs back to the starting position.\nRepeat the movement, this time lowering your legs to the opposite side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/CYJITYZXyAYiW4",
    "id": 501,
    "target": "cardiovascular system",
    "instructions": "Start in a standing position with your feet shoulder-width apart.\nLower your body into a squat position, placing your hands on the ground in front of you.\nKick your feet back, landing in a push-up position.\nPerform a push-up, lowering your chest to the ground and then pushing back up.\nJump your feet forward, landing in a squat position.\nJump up explosively, reaching your arms overhead.\nLand softly and immediately lower back into the squat position to begin the next repetition."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Fe58SG83MO7FW3",
    "id": 3224,
    "target": "cardiovascular system",
    "instructions": "Stand with your feet together and your arms by your sides.\nJump up, spreading your feet apart and raising your arms above your head.\nAs you land, quickly jump back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/UqXa35eKx-x-gQ",
    "id": 507,
    "target": "abs",
    "instructions": "Lie flat on your back with your legs extended and your arms overhead.\nEngage your core and lift your legs and upper body simultaneously, reaching your hands towards your toes.\nPause for a moment at the top, then slowly lower your legs and upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/eRnq8Wu-sB5swq",
    "id": 508,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/HmO6VKWEpA0bjT",
    "id": 514,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart.\nLower your body into a squat position by bending your knees and pushing your hips back.\nJump explosively off the ground, extending your hips, knees, and ankles.\nWhile in mid-air, quickly bring your arms forward for balance.\nLand softly on the balls of your feet and immediately go into the next repetition.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/wxj9jB4jqckgxj",
    "id": 513,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart.\nLower your body into a squat position by bending your knees and pushing your hips back.\nJump explosively, extending your hips and knees fully.\nLand softly on the balls of your feet and immediately lower your body back into a squat position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/QmVEf4jxlNQsZu",
    "id": 517,
    "target": "abs",
    "instructions": "Stand with your feet wider than shoulder-width apart, toes pointing slightly outward.\nHold a kettlebell in your right hand, with your arm extended overhead and your palm facing forward.\nRotate your left foot slightly to the right, and shift your weight onto your left leg.\nBend your left knee and hinge at the hip, lowering your torso towards the left side.\nKeep your right arm extended overhead and your eyes on the kettlebell.\nAs you lower your torso, allow your right leg to straighten and your right foot to pivot slightly.\nLower your torso until you feel a stretch in your left hamstring and your right arm is pointing towards the ground.\nPause for a moment, then engage your core and push through your left heel to return to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/qe90sefZ4NdswE",
    "id": 518,
    "target": "forearms",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in each hand with an overhand grip.\nBend your knees slightly and hinge forward at the hips, keeping your back straight and chest up.\nAllow the kettlebells to hang in front of your body with your arms fully extended.\nIn one fluid motion, explosively extend your hips, shrug your shoulders, and pull the kettlebells up towards your shoulders.\nAs the kettlebells reach shoulder height, rotate your wrists and catch the kettlebells in the rack position, with your palms facing inward and the kettlebells resting on the outside of your forearms.\nLower the kettlebells back down to the starting position and repeat the movement with the opposite arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/NYjfy2ck1D2fI-",
    "id": 520,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in each hand at shoulder height.\nPress one kettlebell overhead, fully extending your arm.\nLower the kettlebell back to shoulder height.\nRepeat with the other arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/rEaZEXULeJPXvk",
    "id": 519,
    "target": "pectorals",
    "instructions": "Start by lying on your back on the floor with your knees bent and feet flat on the ground.\nHold a kettlebell in each hand, with your palms facing towards your feet and your arms extended straight up towards the ceiling.\nLower one kettlebell down towards your shoulder while keeping the other kettlebell extended straight up.\nPress the lowered kettlebell back up to the starting position while simultaneously lowering the other kettlebell down towards your shoulder.\nContinue alternating the press motion with each kettlebell for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/DPnO0jVVutUaqc",
    "id": 521,
    "target": "upper back",
    "instructions": "Start in a high plank position with your hands gripping the kettlebells and your feet hip-width apart.\nEngage your core and keep your body in a straight line from head to heels.\nPull one kettlebell up towards your chest, keeping your elbow close to your body.\nLower the kettlebell back down to the starting position and repeat with the other arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/fy5FstGPUPybMR",
    "id": 522,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, knees slightly bent, and hold a kettlebell in each hand with your palms facing your body.\nBend forward at the hips, keeping your back straight and your core engaged.\nPull one kettlebell up towards your chest, keeping your elbow close to your body and squeezing your shoulder blades together.\nLower the kettlebell back down to the starting position and repeat with the other arm.\nContinue alternating arms for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/kPg47tJmg4sJkm",
    "id": 523,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in each hand at shoulder height with your palms facing towards you.\nEngage your core and press the kettlebells overhead, rotating your palms to face forward as you extend your arms.\nPause at the top of the movement, then slowly lower the kettlebells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/QJnlTPMpCtpqjt",
    "id": 524,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in your right hand.\nBend your knees slightly and press the kettlebell overhead with your right arm, keeping your elbow locked.\nRotate your torso to the left, shifting your weight onto your left foot.\nBend your left knee and lower your torso towards the ground, keeping your right arm extended overhead.\nAs you lower, keep your eyes on the kettlebell and your chest lifted.\nOnce your left hand touches the ground, push through your left foot and straighten your left leg, driving your hips forward.\nAs you drive your hips forward, use your core and right arm to press the kettlebell back up to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/qEjCRrjrX3cutc",
    "id": 525,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in one hand with an overhand grip.\nBend your knees slightly and hinge forward at the hips, keeping your back straight and chest up.\nAllow the kettlebell to hang down between your legs, with your arm fully extended.\nIn one fluid motion, explosively extend your hips and knees while pulling the kettlebell up towards your shoulder.\nAs the kettlebell reaches shoulder height, rotate your wrist so that the bottom of the kettlebell is facing up.\nCatch the kettlebell at shoulder height with your elbow bent and your palm facing up.\nLower the kettlebell back down to the starting position by reversing the movement.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/tAxjWW0Ze2R8i8",
    "id": 526,
    "target": "biceps",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in each hand with an overhand grip.\nBend your knees slightly and hinge forward at the hips, keeping your back straight and chest up.\nAllow the kettlebells to hang straight down in front of your body.\nIn one fluid motion, explosively extend your hips and knees while shrugging your shoulders.\nAs the kettlebells rise, pull them up towards your shoulders, keeping your elbows high and out to the sides.\nCatch the kettlebells at shoulder height, with your palms facing inward and your elbows pointing forward.\nLower the kettlebells back down to the starting position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/1ImBfqdM3p5vQV",
    "id": 527,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in each hand at shoulder height.\nBend your knees slightly and engage your core.\nPress the kettlebells overhead, fully extending your arms.\nBend your knees and quickly drop into a partial squat.\nExplosively extend your hips and knees, driving the kettlebells overhead.\nLock out your arms and catch the kettlebells overhead with your knees slightly bent.\nStand up straight and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/XOJhad8Tj4Sew4",
    "id": 528,
    "target": "delts",
    "instructions": "Start by standing with your feet shoulder-width apart, holding a kettlebell in each hand at shoulder height.\nBend your knees slightly and engage your core.\nInitiate the movement by explosively extending your hips, knees, and ankles, driving the kettlebells overhead.\nAs the kettlebells reach the top, press them fully overhead, locking out your arms.\nLower the kettlebells back to the starting position by bending your elbows and bringing them back down to shoulder height.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/T-a8rOm8WWK4wa",
    "id": 529,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in each hand at arm's length in front of your thighs.\nBend your knees slightly and hinge forward at the hips, keeping your back flat and chest up.\nIn one explosive motion, extend your hips, knees, and ankles, and simultaneously pull the kettlebells up towards your shoulders.\nAs the kettlebells reach shoulder level, rotate your wrists and punch the kettlebells overhead, fully extending your arms.\nLower the kettlebells back down to the starting position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/4zVsBACLZs9xtQ",
    "id": 530,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in your right hand.\nExtend your right arm overhead, keeping your eyes on the kettlebell.\nRotate your left foot 45 degrees to the left and your right foot 90 degrees to the right.\nBend at the waist to the left, keeping your right arm extended overhead.\nLower the kettlebell towards the ground, reaching towards your left foot.\nPause for a moment, then engage your core and push through your right foot to return to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "chest",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/GHZGGGMwfK1hgL",
    "id": 531,
    "target": "pectorals",
    "instructions": "Start by lying on your back on the floor with your knees bent and feet flat on the ground.\nHold a kettlebell in one hand, with your palm facing towards your feet.\nExtend your arm straight up towards the ceiling, keeping your elbow locked and your wrist straight.\nSlowly lower the kettlebell back down to the starting position, maintaining control throughout the movement.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "waist",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/55gHKjFzB6J5XK",
    "id": 532,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in one hand.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nPass the kettlebell between your legs, switching hands as it reaches the back of your legs.\nAs the kettlebell comes forward, pass it to the other hand between your legs.\nContinue passing the kettlebell between your legs in a figure 8 motion.\nMaintain a steady pace and engage your core throughout the exercise.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/zKHa8Wcvo2BbO8",
    "id": 533,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, toes slightly turned out.\nHold the kettlebell with both hands in front of your chest, close to your body.\nEngage your core and keep your chest up as you lower your hips down and back, as if sitting into a chair.\nLower until your thighs are parallel to the ground, or as low as you can comfortably go.\nDrive through your heels to stand back up, squeezing your glutes at the top.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/-OcxyXtqbXPzyM",
    "id": 534,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell close to your chest with both hands.\nKeeping your chest up and core engaged, lower your body down into a squat position by bending at the knees and hips.\nContinue lowering until your thighs are parallel to the ground, or as low as you can comfortably go.\nPause for a moment at the bottom, then push through your heels to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/i-gGApmXXGHiw4",
    "id": 535,
    "target": "hamstrings",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in front of your thighs.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nLower the kettlebell towards the ground, allowing it to swing between your legs.\nQuickly extend your hips and knees, using the momentum to swing the kettlebell up to shoulder height.\nAs the kettlebell reaches shoulder height, rotate your wrists and catch the kettlebell in the rack position, with your elbow tucked in and the kettlebell resting on your forearm.\nLower the kettlebell back down to the starting position between your legs, and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/yDeLRIlYhkMph2",
    "id": 536,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in front of your chest with both hands.\nTake a step forward with your right foot, lowering your body into a lunge position.\nAs you lunge forward, pass the kettlebell under your right thigh and transfer it to your left hand.\nPush off with your right foot to return to the starting position, while simultaneously passing the kettlebell back to your right hand.\nRepeat the lunge on the opposite side, passing the kettlebell under your left thigh.\nContinue alternating lunges and passing the kettlebell between hands for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/lLHCFWMDNIQV8J",
    "id": 537,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in one hand with an overhand grip.\nBend your knees slightly and hinge at the hips, lowering the kettlebell between your legs.\nExplosively extend your hips, knees, and ankles, using the momentum to swing the kettlebell up to shoulder height.\nAs the kettlebell reaches shoulder height, rotate your wrist and punch your hand straight up, locking out your arm overhead.\nLower the kettlebell back down to the starting position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/zn1TnBwr9GHfZi",
    "id": 1298,
    "target": "pectorals",
    "instructions": "Lie flat on your back on the floor with your knees bent and feet flat on the ground.\nHold the kettlebell in one hand with your palm facing towards your feet and your arm extended straight up towards the ceiling.\nSlowly lower the kettlebell towards your chest by bending your elbow, keeping your upper arm close to your body.\nPause for a moment when the kettlebell is just above your chest, then push it back up to the starting position by extending your elbow.\nRepeat for the desired number of repetitions, then switch to the other arm."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/zMIG8QBz8xQsfn",
    "id": 538,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in one hand at shoulder height.\nBend your knees slightly and engage your core.\nPress the kettlebell overhead in a straight line, fully extending your arm.\nAs you press the kettlebell overhead, simultaneously dip your knees and quickly straighten them to generate momentum.\nAs the kettlebell reaches its highest point, quickly drop underneath it by bending your knees and hips.\nCatch the kettlebell with a slight bend in your knees and hips, and your arm fully extended overhead.\nStand up straight, fully extending your knees and hips, and stabilize the kettlebell overhead.\nLower the kettlebell back to the starting position by bending your knees and hips, and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/PsLFJSYj6Nt89b",
    "id": 539,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in one hand at shoulder height.\nEngage your core and keep your back straight.\nPress the kettlebell overhead, extending your arm fully.\nPause for a moment at the top, then slowly lower the kettlebell back to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/OMfSXDda9PD2xZ",
    "id": 540,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in one hand at shoulder level.\nBend your knees slightly and engage your core.\nPress the kettlebell overhead by extending your arm and fully extending your legs.\nLower the kettlebell back to the starting position by bending your knees and bringing the kettlebell back to your shoulder.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "back",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/9BtsWJpHEZtSUQ",
    "id": 541,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in one hand with an overhand grip.\nBend your knees slightly and hinge forward at the hips, keeping your back straight and your core engaged.\nPull the kettlebell up towards your chest, keeping your elbow close to your body and squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the kettlebell back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides and repeat with the other arm."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/yprjXXmskLnw0F",
    "id": 542,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in one hand between your legs.\nBend your knees slightly and hinge at the hips, lowering the kettlebell towards the ground.\nExplosively extend your hips and knees, using the momentum to swing the kettlebell up towards your shoulder.\nAs the kettlebell reaches shoulder height, rotate your hand and punch it straight up overhead, fully extending your arm.\nLower the kettlebell back down between your legs and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/qes38aalqgwvm7",
    "id": 543,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in one hand.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nRaise the kettlebell up to shoulder height, keeping your elbow close to your body.\nExtend your arm fully overhead, straightening your elbow.\nLower the kettlebell back down to shoulder height, then return to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/9Mw4kDmji5iFx4",
    "id": 544,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in front of your chest with both hands.\nLift your left foot off the ground and extend it forward, keeping it parallel to the ground.\nSlowly lower your body down into a squat position, keeping your right foot flat on the ground and your left leg extended.\nPause for a moment at the bottom of the squat, then push through your right heel to return to the starting position.\nRepeat for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "chest",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/D13C1OSZY20p75",
    "id": 545,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands on the kettlebells, shoulder-width apart.\nLower your chest towards the ground, keeping your elbows close to your body.\nPush through your hands explosively, lifting your hands off the kettlebells and extending your arms fully.\nLand softly back on the kettlebells and immediately lower your chest back down for the next repetition.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/Ft3dIlqg-UMfxs",
    "id": 546,
    "target": "delts",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a kettlebell in each hand at shoulder height, palms facing forward.\nPress the kettlebells overhead, fully extending your arms.\nLower the kettlebells back to shoulder height.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/fKKTkqTGEZNbMk",
    "id": 1438,
    "target": "delts",
    "instructions": "Sit on a bench with your back straight and feet flat on the ground.\nHold a kettlebell in each hand at shoulder level with your palms facing forward.\nPress the kettlebells overhead by extending your arms fully.\nPause for a moment at the top, then slowly lower the kettlebells back to shoulder level.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/Xoeq1lUSkzahsH",
    "id": 547,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in each hand at shoulder height.\nPress one kettlebell overhead while keeping the other kettlebell at shoulder height.\nLower the pressed kettlebell back to shoulder height while simultaneously pressing the other kettlebell overhead.\nContinue alternating the pressing motion, creating a seesaw-like movement.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/Pi40aLLYLerOOz",
    "id": 548,
    "target": "traps",
    "instructions": "Stand with your feet wider than shoulder-width apart, toes pointing outwards.\nHold a kettlebell with both hands in front of your body, arms extended downwards.\nBend your knees and lower your hips into a squat position, keeping your back straight.\nDrive through your heels and explosively extend your hips and knees, pulling the kettlebell up towards your chin.\nAs you pull the kettlebell up, keep your elbows high and wide, and squeeze your shoulder blades together.\nLower the kettlebell back down to the starting position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/kNVOywM4UGTnqy",
    "id": 549,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, toes pointed slightly outward.\nHold the kettlebell with both hands in front of your body, arms extended.\nBend your knees slightly and hinge at the hips, pushing your butt back.\nSwing the kettlebell back between your legs, keeping your arms straight and maintaining a flat back.\nDrive your hips forward and swing the kettlebell up to shoulder height, using the momentum generated by your hips.\nAllow the kettlebell to swing back down between your legs and repeat the movement for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/qGbyCcxv38PczY",
    "id": 550,
    "target": "delts",
    "instructions": "Start by standing with your feet shoulder-width apart, holding a kettlebell in front of your chest with both hands, palms facing each other.\nLower into a squat position by bending your knees and pushing your hips back, keeping your chest up and your back straight.\nAs you reach the bottom of the squat, explosively drive through your heels to stand up, simultaneously pressing the kettlebell overhead.\nLock out your arms at the top of the movement, fully extending your elbows.\nLower the kettlebell back to the starting position by reversing the movement, bending your elbows and lowering the weight back to your chest.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/xcCZflMlaGEIT1",
    "id": 551,
    "target": "glutes",
    "instructions": "Start by lying on your back with your legs extended and the kettlebell held in your right hand, arm fully extended above your shoulder.\nBend your right knee and place your right foot flat on the ground, keeping your left leg extended.\nPressing through your right foot, lift your hips off the ground, coming into a bridge position.\nSlide your left leg underneath your body, bending your left knee and placing your left foot flat on the ground.\nRotate your torso to the left, bringing your left hand to the ground for support.\nPressing through your right foot and left hand, lift your torso off the ground, coming into a kneeling position.\nFrom the kneeling position, stand up, keeping the kettlebell extended overhead.\nReverse the movement to return to the starting position.\nRepeat the exercise on the other side, starting with the kettlebell in your left hand."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/3HK53FBjDVZhzb",
    "id": 552,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in front of your thighs with both hands, palms facing towards you.\nBend your knees slightly and hinge at the hips, lowering the kettlebell towards the ground.\nExplosively extend your hips and knees, using the momentum to pull the kettlebell up towards your shoulders.\nAs the kettlebell reaches shoulder height, rotate your wrists and catch the kettlebell in the rack position, with your elbows tucked in and the kettlebell resting on the back of your forearm.\nLower the kettlebell back down to the starting position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/zq4CR5t8Vf9lOj",
    "id": 553,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in each hand at shoulder level with your palms facing forward.\nEngage your core and press the kettlebells overhead, fully extending your arms.\nPause for a moment at the top, then slowly lower the kettlebells back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/AjXa2yByQa3K-Q",
    "id": 1345,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, knees slightly bent, and hold a kettlebell in each hand with your palms facing your body.\nBend forward at the hips, keeping your back straight and your core engaged.\nPull the kettlebells up towards your chest, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the kettlebells back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "kettlebell",
    "gifUrl": "https://v2.exercisedb.io/image/vjhlxNF-zGVBqZ",
    "id": 554,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart, holding a kettlebell in your right hand overhead.\nRotate your left foot outwards about 45 degrees and keep your right foot pointing forward.\nBend your torso to the left side, keeping your right arm extended overhead and your eyes on the kettlebell.\nLower your torso as far as you can while keeping your right arm straight and your left arm extended to the side.\nPause for a moment, then return to the starting position by pushing through your right foot and engaging your obliques.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/93bFKP7lUjfXGP",
    "id": 555,
    "target": "hamstrings",
    "instructions": "Sit on the edge of a bench or chair with your feet flat on the ground and your knees bent at a 90-degree angle.\nLean back slightly and place your hands on the edge of the bench or chair for support.\nEngaging your hamstrings, lift your feet off the ground and extend your legs straight out in front of you.\nPause for a moment at the top, then slowly bend your knees and bring your feet back towards your body.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/UIWwmDcdRQmO1X",
    "id": 558,
    "target": "lats",
    "instructions": "Start by hanging from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.\nEngage your core and use a swinging motion to generate momentum.\nAs you swing forward, pull your chest towards the bar, using your lats and biceps to initiate the movement.\nContinue the upward motion until your chest reaches the bar, then transition into a dip position by pushing down on the bar and extending your arms.\nLower yourself back down to the starting position by bending your arms and controlling the descent.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/AVY-toroRnI977",
    "id": 3640,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, lift your shoulder blades off the ground and reach your right hand towards your left knee.\nReturn to the starting position and repeat, this time reaching your left hand towards your right knee.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/pc2RACMwp5lFkp",
    "id": 1346,
    "target": "lats",
    "instructions": "Kneel on the ground with your knees hip-width apart and your toes pointing back.\nExtend your arms overhead and interlace your fingers.\nKeeping your back straight, slowly lean to the right side, feeling a stretch in your left lat muscle.\nHold the stretch for 20-30 seconds, then return to the starting position.\nRepeat the stretch on the left side, leaning to the left and feeling a stretch in your right lat muscle.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/qJ7pljrb42lCfQ",
    "id": 3239,
    "target": "abs",
    "instructions": "Start in a kneeling position with your hands on the ground, shoulder-width apart.\nExtend your legs behind you, resting on your toes, and lift your body into a plank position.\nKeeping your core engaged and your hips stable, lift one hand off the ground and tap the opposite shoulder.\nReturn the hand to the ground and repeat with the other hand.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/-WNDO5uNhHI14m",
    "id": 3211,
    "target": "pectorals",
    "instructions": "Start by kneeling on the ground with your hands shoulder-width apart, fingers pointing forward.\nExtend your legs behind you, resting on the balls of your feet, so that your body forms a straight line from head to heels.\nEngage your core and lower your body towards the ground by bending your elbows, keeping them close to your sides.\nContinue lowering until your chest is just above the ground, then push back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/FTsYaXsOGieupE",
    "id": 3288,
    "target": "pectorals",
    "instructions": "Position yourself between two parallel bars with your arms extended and supporting your body weight.\nLower your body by bending your elbows until your upper arms are parallel to the ground.\nPause for a moment, then push yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/vYYmyR8wjQRQYI",
    "id": 3418,
    "target": "lats",
    "instructions": "Grab the pull-up bar with an overhand grip, slightly wider than shoulder-width apart.\nHang with your arms fully extended and your body straight.\nEngage your lats and biceps to pull your body up towards the bar, keeping your elbows close to your body.\nContinue pulling until your chin is above the bar.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/BVr-IkvN8UH8Jy",
    "id": 3419,
    "target": "abs",
    "instructions": "Sit on the floor with your legs extended in front of you.\nPlace your hands on the floor beside your hips, fingers pointing forward.\nEngage your core and lift your legs off the ground, keeping them straight.\nTry to bring your legs parallel to the floor, forming an 'L' shape with your body.\nHold this position for as long as you can.\nSlowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/aQc4han1gHjasL",
    "id": 3300,
    "target": "abs",
    "instructions": "Start in a push-up position with your hands shoulder-width apart and your body straight.\nEngage your core and slowly shift your weight forward, bringing your shoulders past your hands.\nKeep your elbows slightly bent and your body straight as you lean forward.\nHold this position for a few seconds, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/pOwJxep2YnviK7",
    "id": 2271,
    "target": "delts",
    "instructions": "Stand with your feet shoulder-width apart and your knees slightly bent.\nKeep your left hand up to protect your face and your right hand by your chin.\nRotate your hips and pivot on your left foot as you extend your left arm forward in a punching motion.\nTwist your torso and engage your core muscles to generate power in the punch.\nSnap your arm back to the starting position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/3n6h2apusPIlPL",
    "id": 570,
    "target": "abs",
    "instructions": "Sit on a flat bench with your legs extended straight out in front of you.\nPlace your hands on the bench beside your hips for support.\nEngage your abs and lift your legs off the ground, bringing your knees towards your chest.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/epyAmd62mwc29i",
    "id": 1576,
    "target": "hamstrings",
    "instructions": "Lie flat on your back with your legs extended.\nBend one knee and bring it towards your chest, holding onto your thigh or shin.\nStraighten your leg as much as possible while keeping it elevated.\nHold the stretch for 20-30 seconds.\nRepeat with the other leg."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/E6SsoCLGcaISLz",
    "id": 3013,
    "target": "glutes",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your arms by your sides, palms facing down.\nEngage your glutes and core, then lift your hips off the ground until your body forms a straight line from your knees to your shoulders.\nPause for a moment at the top, squeezing your glutes.\nSlowly lower your hips back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ggCNcCifLnrhNl",
    "id": 1352,
    "target": "spine",
    "instructions": "Lie flat on your stomach with your legs extended and your arms by your sides.\nEngage your glutes and hamstrings, and slowly lift your upper body off the ground, curling your back upwards.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/OEV7AjrDhfSZN5",
    "id": 3582,
    "target": "glutes",
    "instructions": "Start by standing with your feet shoulder-width apart.\nTake a step forward with your right foot, lowering your body into a lunge position.\nPush off with your right foot and jump into the air, switching the position of your feet mid-air.\nLand softly with your left foot forward and immediately lower your body into a lunge position.\nContinue alternating between lunges and jumps for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/htileHUPv5rjdo",
    "id": 1688,
    "target": "abs",
    "instructions": "Start by standing with your feet shoulder-width apart.\nTake a step forward with your right foot, lowering your body into a lunge position.\nAs you lunge, twist your torso to the right, bringing your left elbow towards your right knee.\nPause for a moment, then return to the starting position.\nRepeat on the other side, stepping forward with your left foot and twisting your torso to the left.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/hb6RTtBEv6wZDz",
    "id": 613,
    "target": "quads",
    "instructions": "Lie on your side with your legs straight.\nBend your top leg and grab your ankle or foot with your hand.\nGently pull your ankle or foot towards your glutes until you feel a stretch in your quads.\nHold the stretch for 20-30 seconds.\nRelease the stretch and repeat on the other side."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/VLsNTrv9sVsTc8",
    "id": 2312,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngage your abs and lift your upper body off the ground, bringing your right elbow towards your left knee.\nAt the same time, extend your right leg straight out and lift it off the ground.\nPause for a moment, then return to the starting position.\nRepeat the movement, this time bringing your left elbow towards your right knee and extending your left leg.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/xAxDcGnCU2iLti",
    "id": 620,
    "target": "abs",
    "instructions": "Lie flat on a flat bench with your back pressed against it.\nPlace your hands under your glutes for support.\nKeep your legs straight and together, and lift them up towards the ceiling.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ud1-d1mdT8cpdq",
    "id": 865,
    "target": "abs",
    "instructions": "Lie flat on your back with your legs extended and your arms by your sides.\nPlace your hands under your glutes for support.\nEngage your core and lift your legs off the ground, raising them towards the ceiling.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Kcm9yjZ7c228Sh",
    "id": 624,
    "target": "glutes",
    "instructions": "Stand with your back against a wall and your feet hip-width apart.\nSlowly slide your back down the wall until your knees are bent at a 90-degree angle.\nLift your right foot off the ground and bring your knee towards your chest.\nLower your right foot back down and lift your left foot off the ground, bringing your knee towards your chest.\nContinue alternating between lifting your right and left foot for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/3ChYzpDFw-ndC5",
    "id": 1353,
    "target": "lats",
    "instructions": "Stand with your feet shoulder-width apart, holding a medicine ball in both hands at chest level.\nBend your knees slightly and engage your core.\nLower your body into a squat position, keeping your back straight and chest up.\nExplosively extend your hips and legs, while simultaneously throwing the medicine ball overhead.\nRelease the ball at the top of the movement and catch it on the way down.\nLower your body back into the squat position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/wk49wCuXQFj1IM",
    "id": 1302,
    "target": "pectorals",
    "instructions": "Stand with your feet shoulder-width apart, holding the medicine ball at chest level.\nExtend your arms forward, pushing the medicine ball away from your chest with force.\nAs you release the ball, follow through with your arms and torso, transferring your weight from your back foot to your front foot.\nCatch the ball as it rebounds off the wall or partner, and immediately repeat the movement.\nContinue for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/oowSnm3vSIqqKr",
    "id": 1303,
    "target": "pectorals",
    "instructions": "Start in a 3 point stance with one hand on the medicine ball and the other hand on the ground.\nExtend your legs and position your body in a straight line.\nLower your chest towards the ground while keeping your back straight.\nPush the medicine ball away from your body, extending your arm fully.\nReturn to the starting position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/9vhCjrU-C7Ao8M",
    "id": 1304,
    "target": "pectorals",
    "instructions": "Stand with your feet shoulder-width apart, holding a medicine ball at chest level.\nExtend your arms forward, pushing the medicine ball away from your chest.\nPause for a moment, then slowly bring the medicine ball back to your chest.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/bYOa2HdDrWP4AF",
    "id": 1305,
    "target": "pectorals",
    "instructions": "Stand with your feet shoulder-width apart, holding the medicine ball at chest level.\nExtend your arms forward, pushing the medicine ball away from your chest.\nPause for a moment, then slowly bring the medicine ball back to your chest.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/navY7sFahEN9V8",
    "id": 1312,
    "target": "pectorals",
    "instructions": "Stand with your feet shoulder-width apart, holding a medicine ball at chest level.\nStep forward with your right foot and simultaneously push the medicine ball forward, extending your arms fully.\nAs you push the ball forward, release it and let it roll forward.\nQuickly run forward and catch the ball before it hits the ground.\nOnce you catch the ball, bring it back to your chest and repeat the movement with your left foot forward.\nContinue alternating legs and repeating the exercise for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/i1bEFy9Bo3KShV",
    "id": 1701,
    "target": "triceps",
    "instructions": "Start in a high plank position with your hands on the medicine ball, shoulder-width apart.\nLower your body towards the ground by bending your elbows, keeping them close to your sides.\nPush back up to the starting position, fully extending your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/2344E888OIrEKL",
    "id": 1354,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, holding a medicine ball with both hands above your head.\nEngage your core and keep your back straight.\nBend your knees slightly and forcefully slam the medicine ball down to the ground in front of you.\nAs you slam the ball down, use your entire body to generate power, including your shoulders and core.\nCatch the ball on the bounce and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/im-efBMJe2OmmS",
    "id": 1750,
    "target": "triceps",
    "instructions": "Lie flat on your back on a bench with your knees bent and feet flat on the ground.\nHold the medicine ball with both hands, extending your arms straight up above your chest.\nLower the medicine ball towards your chest, keeping your elbows close to your body.\nExplosively push the medicine ball upwards, extending your arms fully and throwing the ball as high as possible.\nCatch the medicine ball and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/dJnDF2Y7j-FAbz",
    "id": 627,
    "target": "lats",
    "instructions": "Grab the pull-up bar with an underhand grip (palms facing towards you) and your hands slightly wider than shoulder-width apart.\nHang from the bar with your arms fully extended and your feet off the ground.\nEngage your back muscles and pull your body up towards the bar, leading with your chest.\nContinue pulling until your chin is above the bar.\nPause for a moment at the top, then slowly lower your body back down to the starting position with control.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/EoIBZb4OkkF-0z",
    "id": 3217,
    "target": "pectorals",
    "instructions": "Start in a push-up position with your hands slightly wider than shoulder-width apart and your feet hip-width apart.\nLower your body towards the ground, bending your elbows and keeping your core engaged.\nAs you lower your body, shift your weight back and lift your hips up towards the ceiling, creating an inverted V shape with your body.\nContinue to lower your body until your chest is just above the ground, then reverse the movement, pushing your hips back down and extending your arms to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/-h6n0WGs72gl9Y",
    "id": 1421,
    "target": "forearms",
    "instructions": "Start in a push-up position with your hands directly under your shoulders and your body in a straight line.\nLower your body down towards the ground by bending your elbows, keeping them close to your sides.\nOnce your elbows are at a 90-degree angle, lower your forearms to the ground, keeping your elbows directly under your shoulders.\nPause for a moment, then push through your palms to lift your forearms back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/i8zUuKJxqKB5tX",
    "id": 628,
    "target": "glutes",
    "instructions": "Place a resistance band around your ankles.\nStand with your feet shoulder-width apart and slightly bend your knees.\nTake a step to the side with your right foot, maintaining tension on the resistance band.\nFollow with your left foot, stepping to the side to return to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ApvOB1UkjyV27x",
    "id": 630,
    "target": "cardiovascular system",
    "instructions": "Start in a high plank position with your hands directly under your shoulders and your body in a straight line.\nEngage your core and bring your right knee towards your chest, then quickly switch and bring your left knee towards your chest.\nContinue alternating legs in a running motion, keeping your hips low and your core engaged.\nMaintain a steady pace and breathe evenly throughout the exercise.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Ui-kMsvfNUx9-y",
    "id": 631,
    "target": "lats",
    "instructions": "Start by hanging from a pull-up bar with your palms facing away from you and your arms fully extended.\nEngage your core and pull your body up towards the bar, leading with your chest.\nAs you reach the top of the movement, transition your grip so that your palms are facing towards you.\nContinue pulling yourself up until your chest is above the bar and your arms are fully flexed.\nReverse the movement by slowly lowering yourself back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/E0NFFZrfL4WiQj",
    "id": 1401,
    "target": "lats",
    "instructions": "Start by hanging from a vertical bar with your palms facing away from you and your arms fully extended.\nEngage your core and pull your body up towards the bar, leading with your chest.\nAs you pull yourself up, lean back slightly and bring your elbows towards your sides.\nContinue pulling until your chest reaches the bar and your elbows are fully bent.\nPause for a moment at the top, then slowly lower yourself back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/TfGhdvcsg2Hmvq",
    "id": 2328,
    "target": "triceps",
    "instructions": "Place the stability ball on the ground and position yourself in a push-up position with your hands on the ball, slightly narrower than shoulder-width apart.\nEngage your core and keep your body in a straight line from head to toe.\nLower your chest towards the ball by bending your elbows, keeping them close to your body.\nPause for a moment at the bottom, then push yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/KRwNLu7rml42vc",
    "id": 634,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/H-ZDX0UgQ1M3nl",
    "id": 1495,
    "target": "abs",
    "instructions": "Lie on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head or cross them over your chest.\nEngage your abs and lift your shoulder blades off the ground, rotating your torso to one side.\nPause for a moment, then lower your shoulder blades back down to the starting position.\nRepeat on the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/PUAmHptHARqFgg",
    "id": 635,
    "target": "abs",
    "instructions": "Lie on your back with your knees bent and feet flat on the floor.\nPlace your hands behind your head or cross them over your chest.\nEngage your abs and lift your shoulder blades off the floor, rotating your torso to one side.\nPause for a moment, then lower your shoulder blades back down to the floor.\nRepeat on the other side, alternating sides with each repetition."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/U90tSCkI34trGa",
    "id": 1355,
    "target": "lats",
    "instructions": "Stand facing a wall with your feet shoulder-width apart.\nExtend one arm straight out in front of you and place your palm against the wall.\nEngage your core and lean your body forward, keeping your arm straight and your back flat.\nSlowly push against the wall with your palm, activating your lat muscles.\nHold the position for a few seconds, then release and repeat with the other arm."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/AMv9vFyNT2eNTb",
    "id": 638,
    "target": "lats",
    "instructions": "Stand facing a pull-up bar with your feet shoulder-width apart.\nReach up and grab the bar with an underhand grip, with one hand gripping the bar and the other hand holding your wrist for support.\nHang from the bar with your arm fully extended, keeping your body straight and your core engaged.\nPull yourself up towards the bar by bending your elbow and squeezing your back muscles.\nContinue pulling until your chin is above the bar, then slowly lower yourself back down to the starting position.\nRepeat for the desired number of repetitions, then switch arms and repeat."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/SV56LFHMMQs6Io",
    "id": 639,
    "target": "triceps",
    "instructions": "Stand facing away from a bench or chair, with your feet shoulder-width apart.\nPlace one hand on the bench or chair behind you, fingers pointing towards your body.\nExtend your legs out in front of you, keeping your heels on the ground.\nBend your elbows and lower your body towards the ground, keeping your back close to the bench or chair.\nPause for a moment at the bottom, then push through your palms to straighten your arms and return to the starting position.\nRepeat for the desired number of repetitions, then switch sides and repeat with the other arm."
  },
  {
    "bodyPart": "waist",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/W4j35mGrNywULC",
    "id": 640,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart, holding the medicine ball with one hand in front of your waist.\nBend your knees slightly and engage your core.\nRaise the medicine ball above your head, fully extending your arm.\nForcefully slam the medicine ball down to the ground, using your core and shoulders to generate power.\nCatch the medicine ball on the bounce and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/-teonHtRgR0Mc2",
    "id": 1773,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart, knees slightly bent, and hold a towel with one hand.\nBend forward at the waist, keeping your back straight and your core engaged.\nExtend your arm fully, allowing the towel to hang in front of you.\nPull the towel towards your chest, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower the towel back to the starting position.\nRepeat for the desired number of repetitions, then switch arms."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/l78aTkOiRWbwmg",
    "id": 1386,
    "target": "calves",
    "instructions": "Stand with your feet shoulder-width apart, toes pointing forward.\nPlace your hands on a stable surface for support, such as a wall or a bar.\nLift one leg off the ground, keeping your knee slightly bent.\nRaise your heel as high as possible, using your calf muscles.\nPause for a moment at the top, then slowly lower your heel back down.\nRepeat for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/l3wMrqMgVN2Aek",
    "id": 1387,
    "target": "calves",
    "instructions": "Stand with your feet hip-width apart and place your hands on a wall or sturdy object for balance.\nLift one foot off the ground and balance on the other foot.\nSlowly raise your heel off the ground, lifting your body up onto the ball of your foot.\nPause for a moment at the top, then slowly lower your heel back down to the starting position.\nRepeat for the desired number of repetitions, then switch legs and repeat."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/aqMaeMPVqD2b2i",
    "id": 1476,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart.\nExtend one leg forward, keeping it off the ground.\nBend your standing leg and lower your body down as if sitting back into a chair.\nKeep your chest up and your back straight.\nPush through your heel to return to the starting position.\nRepeat with the other leg."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Dl878JqyqTry1q",
    "id": 642,
    "target": "glutes",
    "instructions": "Start in a push-up position with your hands slightly wider than shoulder-width apart and your feet together.\nLower your body towards the ground by bending your elbows, keeping your back straight and core engaged.\nAs you push back up, kick one leg out to the side, extending it fully and engaging your glutes.\nReturn your leg to the starting position and repeat the push-up, alternating legs with each repetition.\nContinue alternating leg kicks and push-ups for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/1-pXCFvgcRa5pC",
    "id": 643,
    "target": "triceps",
    "instructions": "Stand or sit upright with your feet shoulder-width apart.\nExtend one arm overhead, bending at the elbow so that your hand reaches towards the opposite shoulder blade.\nWith your other hand, gently pull the elbow of the extended arm towards the opposite side of your head, feeling a stretch in your triceps.\nHold the stretch for 15-30 seconds, then release.\nRepeat on the other side."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/jYXSu6jFrDRYpk",
    "id": 3147,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands by your sides.\nEngage your abs and tilt your pelvis upward, pressing your lower back into the ground.\nHold this position for a few seconds, focusing on contracting your abs.\nRelease the tilt and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/EHvK0vQiWo00Dx",
    "id": 1422,
    "target": "glutes",
    "instructions": "Lie on your back with your knees bent and feet flat on the ground.\nPlace your arms by your sides with your palms facing down.\nEngage your glutes and core muscles.\nTilt your pelvis upward, lifting your hips off the ground.\nHold the bridge position for a few seconds.\nSlowly lower your hips back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/v1DxpcjSqMDoXw",
    "id": 3662,
    "target": "glutes",
    "instructions": "Start in a push-up position with your hands slightly wider than shoulder-width apart and your feet together.\nEngage your core and lift your hips up towards the ceiling, forming an inverted V shape with your body.\nLower your upper body towards the ground by bending your elbows, keeping them close to your body.\nAs you lower down, shift your weight forward and transition into a cobra pose by straightening your arms and lifting your chest up.\nReverse the movement by bending your elbows and lowering your chest back down towards the ground.\nPush through your hands to return to the inverted V position.\nContinue the movement by lowering your hips back down towards the ground, returning to the starting push-up position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/CSzq3lLPSiVu2A",
    "id": 1306,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands slightly wider than shoulder-width apart.\nLower your chest towards the ground by bending your elbows, keeping your body in a straight line.\nPush explosively off the ground, using your chest muscles to propel your upper body off the ground.\nLand softly with your hands back in the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/g8wVaNe3OlAEtH",
    "id": 1687,
    "target": "abs",
    "instructions": "Stand with your feet hip-width apart and your arms by your sides.\nTake a step back with your right foot, landing on the ball of your foot.\nBend your left knee and lower your body into a lunge position.\nAs you lower into the lunge, simultaneously reach your arms overhead.\nPause for a moment at the bottom of the lunge, then return to the starting position by pushing through your left heel and bringing your right foot forward.\nRepeat the movement on the other side, stepping back with your left foot and bending your right knee.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/BIZRwfN83fAocL",
    "id": 3119,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart, toes pointing slightly outward.\nLower your body down by bending your knees and pushing your hips back as if you were sitting on a chair.\nKeep your chest up and your back straight throughout the movement.\nLower yourself until your thighs are parallel to the ground or as low as you can comfortably go.\nPause for a moment at the bottom, then push through your heels to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/T2aepqG7NIGMvN",
    "id": 3132,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart, toes pointing slightly outward.\nHold onto a stable support, such as a chair or wall, for balance.\nLower your body down into a squat position by bending your knees and pushing your hips back.\nKeep your chest up and your back straight throughout the movement.\nPause for a moment at the bottom, then push through your heels to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/jdhiAUuZY4oORs",
    "id": 3665,
    "target": "abs",
    "instructions": "Start in a high plank position with your hands directly under your shoulders and your body in a straight line from head to toe.\nEngage your core and squeeze your glutes to maintain a stable position.\nLower your body down onto your forearms, one arm at a time, maintaining a straight line from head to toe.\nHold this position for the desired amount of time, keeping your core and glutes engaged.\nTo return to the starting position, push through your forearms and lift your body back up into a high plank position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Vwr9fpkCAJhlkt",
    "id": 3203,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/hkfWpYSmETT7SD",
    "id": 1707,
    "target": "abs",
    "instructions": "Start by lying face down on a stability ball with your feet shoulder-width apart and your toes touching the ground.\nPlace your hands behind your head or cross them over your chest.\nEngage your core muscles and slowly lift your upper body off the ball, keeping your back straight.\nRotate your torso to one side, bringing your shoulder towards your hip. Keep your hips and legs stable throughout the movement.\nPause for a moment, then return to the starting position.\nRepeat the rotation to the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ZVzZy30UK6TE2R",
    "id": 651,
    "target": "lats",
    "instructions": "Hang from a pull-up bar with a neutral grip (palms facing each other) and your arms fully extended.\nEngage your core and squeeze your shoulder blades together.\nPull your body up towards the bar by bending your elbows and driving your elbows down towards your hips.\nContinue pulling until your chin is above the bar.\nPause for a moment at the top, then slowly lower your body back down to the starting position with control.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/FKyiAjINNjUf5H",
    "id": 650,
    "target": "abs",
    "instructions": "Start by sitting on the stability ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nPlace your hands on the sides of the stability ball for support.\nEngage your abs and slowly roll your hips forward, bringing your knees towards your chest.\nPause for a moment at the top of the movement, then slowly extend your legs back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/4UWZKpyY6R9loy",
    "id": 652,
    "target": "lats",
    "instructions": "Hang from a pull-up bar with your palms facing away from you and your arms fully extended.\nEngage your core and squeeze your shoulder blades together.\nPull your body up towards the bar by bending your elbows and bringing your chest towards the bar.\nPause at the top of the movement, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/pBYaBOUwdN9Jad",
    "id": 1689,
    "target": "pectorals",
    "instructions": "Start in a push-up position with your hands slightly wider than shoulder-width apart and your body in a straight line.\nLower your chest towards the ground by bending your elbows, keeping your body straight.\nPush through your palms to extend your arms and return to the starting position.\nFrom the push-up position, pull your chest towards the ground by bending your elbows, keeping your body straight.\nPush through your palms to extend your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/0h3tHJVmJq2hsS",
    "id": 3638,
    "target": "cardiovascular system",
    "instructions": "Start in a push-up position with your hands shoulder-width apart and your body in a straight line.\nLower your chest towards the ground by bending your elbows, keeping your body straight.\nPush through your hands to extend your arms and return to the starting position.\nQuickly bring one knee towards your chest, then quickly switch and bring the other knee towards your chest.\nContinue alternating knees as fast as you can while maintaining good form.\nContinue for the desired duration or number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/28IMgfFEImtSia",
    "id": 662,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands slightly wider than shoulder-width apart and your feet together.\nEngage your core and lower your body towards the ground by bending your elbows, keeping your body in a straight line.\nPause for a moment when your chest is just above the ground, then push yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/1sVVELEWcTFQbY",
    "id": 655,
    "target": "pectorals",
    "instructions": "Place the stability ball on the ground and position yourself facing down with your hands on the ball, shoulder-width apart.\nExtend your legs straight out behind you, balancing on your toes.\nEngage your core and lower your chest towards the ball by bending your elbows, keeping your body in a straight line.\nPause for a moment at the bottom, then push yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/d46XYcNEz79cah",
    "id": 656,
    "target": "pectorals",
    "instructions": "Place the stability ball on the ground and position yourself facing down with your hands on the ball, shoulder-width apart.\nExtend your legs straight out behind you, balancing on your toes.\nEngage your core and lower your chest towards the ball by bending your elbows, keeping your body in a straight line.\nPause for a moment at the bottom, then push yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ofs5iaoOESrQqL",
    "id": 659,
    "target": "pectorals",
    "instructions": "Stand facing a wall, about arm's length away.\nPlace your hands on the wall at shoulder height, slightly wider than shoulder-width apart.\nStep back a few feet, keeping your body straight and your feet hip-width apart.\nBend your elbows and lower your chest towards the wall, keeping your body in a straight line.\nPush back up to the starting position, straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/NxyOWOypzXY-cn",
    "id": 658,
    "target": "pectorals",
    "instructions": "Stand facing a wall, about arm's length away.\nPlace your hands on the wall at shoulder height, slightly wider than shoulder-width apart.\nStep back with your feet, keeping them hip-width apart.\nEngage your core and keep your body in a straight line from head to heels.\nBend your elbows and lower your chest towards the wall, keeping your body straight.\nPause for a moment, then push yourself back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/3MUHPSAk872GR1",
    "id": 660,
    "target": "triceps",
    "instructions": "Start in a push-up position with your hands placed close together, directly under your shoulders.\nHold a dumbbell in each hand, resting them on the ground.\nLower your body towards the ground by bending your elbows, keeping them close to your sides.\nPush through your palms to extend your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/3zVrRWtvNSWi-R",
    "id": 661,
    "target": "glutes",
    "instructions": "Start in a push-up position with your hands slightly wider than shoulder-width apart and your feet together.\nLower your body towards the ground by bending your elbows, keeping your back straight and your core engaged.\nAs you push back up, lift one leg off the ground and kick it out to the side, keeping it straight.\nLower your leg back down and repeat the push-up, then switch to the other leg.\nContinue alternating leg kicks with each push-up repetition."
  },
  {
    "bodyPart": "chest",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/gTfW7-sNwHLSIH",
    "id": 663,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands on the medicine ball, shoulder-width apart.\nEngage your core and lower your body towards the ground by bending your elbows, keeping your back straight.\nPush through your palms to extend your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/b7JWvBDkr7QDu-",
    "id": 1467,
    "target": "triceps",
    "instructions": "Start in a plank position with your forearms on the ground and elbows directly below your shoulders.\nEngage your core and keep your body in a straight line from head to toe.\nLower your chest towards the ground by bending your elbows, keeping them close to your body.\nPause for a moment at the bottom, then push yourself back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/0GQHQPUgbbXqHZ",
    "id": 3145,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands slightly wider than shoulder-width apart and your body in a straight line from head to heels.\nLower your body towards the ground by bending your elbows, keeping them close to your sides.\nOnce your chest is just above the ground, push through your hands to extend your arms and lift your upper body up.\nAt the top of the movement, protract your shoulder blades by pushing your upper back towards the ceiling.\nPause for a moment, then reverse the movement by retracting your shoulder blades and lowering your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/oNliBtWoSeVXZ-",
    "id": 664,
    "target": "abs",
    "instructions": "Start in a push-up position with your hands shoulder-width apart and your body in a straight line.\nLower your body towards the ground by bending your elbows, keeping your core engaged.\nPush back up to the starting position.\nShift your weight onto your left hand and rotate your body to the right, lifting your right arm towards the ceiling.\nHold the side plank position for a few seconds, then return to the starting position.\nRepeat the push-up and side plank on the opposite side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/D6rFvJdJG0WaU0",
    "id": 3533,
    "target": "quads",
    "instructions": "Stand with your feet shoulder-width apart.\nLower your body by bending your knees and pushing your hips back as if sitting on a chair.\nKeep your chest up and your back straight.\nLower yourself until your thighs are parallel to the ground.\nPush through your heels to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/PZwwMiHExHyh39",
    "id": 3201,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ROHvlaaRcSV1sx",
    "id": 3552,
    "target": "quads",
    "instructions": "Stand with your feet shoulder-width apart and your arms by your sides.\nBegin by rapidly moving your feet up and down, as if you were running in place.\nKeep your movements quick and light, focusing on staying on the balls of your feet.\nContinue for the desired duration or number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/zwltzURAgN2AN4",
    "id": 666,
    "target": "pectorals",
    "instructions": "Start in a push-up position with your hands slightly wider than shoulder-width apart and your feet together.\nExtend one arm straight out to the side, parallel to the ground.\nLower your body towards the ground by bending your elbows, keeping your back straight and core engaged.\nPush back up to the starting position, using your chest muscles to lift your body.\nRepeat with the other arm extended."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/xZhiTwdP6gjzPr",
    "id": 668,
    "target": "glutes",
    "instructions": "Lie on your back with your feet flat on the ground and your knees bent.\nPlace your arms by your sides with your palms facing down.\nEngage your glutes and hamstrings, and lift your hips off the ground until your body forms a straight line from your knees to your shoulders.\nHold this position for a few seconds, then slowly lower your hips back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/1GUFg7oDTeyFIM",
    "id": 669,
    "target": "delts",
    "instructions": "Stand tall with your feet shoulder-width apart.\nExtend your right arm across your chest, placing your left hand on your right elbow.\nGently pull your right arm towards your left shoulder, feeling a stretch in your right shoulder.\nHold the stretch for 15-30 seconds, then release.\nRepeat on the other side."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/pqQRytXLBmTCFf",
    "id": 670,
    "target": "lats",
    "instructions": "Grab the pull-up bar with an overhand grip, slightly wider than shoulder-width apart.\nHang from the bar with your arms fully extended and your body straight.\nEngage your back muscles and pull your body up towards the bar, keeping your elbows close to your body.\nContinue pulling until your chin is above the bar.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "resistance band",
    "gifUrl": "https://v2.exercisedb.io/image/-on9pA1w1HgpAK",
    "id": 3236,
    "target": "glutes",
    "instructions": "Start by kneeling on the ground with your knees hip-width apart and your feet flexed.\nWrap the resistance band around your thighs, just above your knees.\nPlace your hands on your hips or extend them out in front of you for balance.\nEngage your glutes and core muscles.\nPush your hips forward and squeeze your glutes as you lift your knees off the ground, extending your hips until your thighs are parallel to the ground.\nHold the position for a moment, then slowly lower your knees back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "resistance band",
    "gifUrl": "https://v2.exercisedb.io/image/aBWHk7foj4aO3U",
    "id": 3007,
    "target": "quads",
    "instructions": "Attach the resistance band to a sturdy anchor point and secure it around your ankle.\nStand facing the anchor point with your feet shoulder-width apart.\nKeeping your core engaged and your upper body stable, extend your leg straight out in front of you.\nPause for a moment at the top, then slowly return your leg to the starting position.\nRepeat for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "resistance band",
    "gifUrl": "https://v2.exercisedb.io/image/tTll04PYnFAz1L",
    "id": 3123,
    "target": "biceps",
    "instructions": "Sit on a chair or bench with your back straight and feet flat on the ground.\nHold the resistance band with an underhand grip, palms facing up, and arms extended down by your sides.\nKeeping your upper arms stationary, exhale and curl the resistance band up towards your shoulders.\nPause for a moment at the top, squeezing your biceps.\nInhale and slowly lower the resistance band back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "resistance band",
    "gifUrl": "https://v2.exercisedb.io/image/4aIVYZe9Xpm6pm",
    "id": 3124,
    "target": "pectorals",
    "instructions": "Sit on a chair or bench with your back straight and feet flat on the ground.\nHold the resistance band handles in each hand, with your palms facing down and elbows bent at a 90-degree angle.\nExtend your arms forward, pushing the resistance band away from your chest.\nPause for a moment at the end of the movement, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "resistance band",
    "gifUrl": "https://v2.exercisedb.io/image/uaVvvlrFSUUvzU",
    "id": 3006,
    "target": "abductors",
    "instructions": "Sit on a chair or bench with your back straight and feet flat on the ground.\nWrap the resistance band around your thighs, just above your knees.\nPlace your hands on the sides of the chair or bench for support.\nEngage your abductors (outer thigh muscles) and slowly push your knees apart, against the resistance of the band.\nPause for a moment at the end of the movement, then slowly bring your knees back together.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "shoulders",
    "equipment": "resistance band",
    "gifUrl": "https://v2.exercisedb.io/image/7raOxPNEpPAj9e",
    "id": 3122,
    "target": "delts",
    "instructions": "Sit on a chair or bench with your back straight and feet flat on the ground.\nHold the resistance band with both hands, palms facing forward, and bring it up to shoulder level.\nPress the band overhead, extending your arms fully.\nPause for a moment at the top, then slowly lower the band back down to shoulder level.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "resistance band",
    "gifUrl": "https://v2.exercisedb.io/image/WwO5UPBy15x-lP",
    "id": 3144,
    "target": "upper back",
    "instructions": "Sit on the floor with your legs extended and loop the resistance band around your feet.\nHold the ends of the resistance band with your hands, palms facing each other.\nKeep your back straight and lean slightly back, engaging your core.\nPull the resistance band towards your chest, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly release the tension and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/4VtpE904S08wat",
    "id": 872,
    "target": "abs",
    "instructions": "Lie flat on your back with your arms extended along your sides.\nBend your knees and lift your feet off the ground, bringing your thighs perpendicular to the floor.\nContract your abs and curl your hips off the floor, bringing your knees towards your chest.\nPause for a moment at the top, then slowly lower your hips back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/4XRvmX6bnNaqVB",
    "id": 672,
    "target": "triceps",
    "instructions": "Position yourself between two parallel bars with your arms fully extended and your body straight.\nLower your body by bending your elbows until your upper arms are parallel to the ground.\nPause for a moment, then push yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/gMDhBT0rDm3wAQ",
    "id": 674,
    "target": "lats",
    "instructions": "Grab the pull-up bar with an underhand grip, hands shoulder-width apart.\nHang from the bar with your arms fully extended and your body straight.\nEngage your back muscles and pull your body up towards the bar, leading with your chest.\nContinue pulling until your chin is above the bar.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/PSUYO0QlKtNcLV",
    "id": 675,
    "target": "glutes",
    "instructions": "Lie face down on a stability ball with your hips resting on the ball and your legs extended straight behind you.\nPlace your hands on the ground in front of you for stability.\nEngaging your glutes and hamstrings, lift your legs up towards the ceiling as high as you can.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ytDWkwLXOZMPCN",
    "id": 1423,
    "target": "glutes",
    "instructions": "Lie face down on a flat bench with your hips at the edge and your legs hanging off the bench.\nHold onto the bench for stability.\nKeeping your legs straight, raise them up towards the ceiling as high as you can.\nSqueeze your glutes at the top of the movement.\nSlowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/g7hm9FgZnZ06WX",
    "id": 3663,
    "target": "abs",
    "instructions": "Sit on the ground with your legs extended in front of you and your hands resting on the ground behind you, fingers pointing towards your feet.\nPress through your hands and lift your hips off the ground, coming into a reverse plank position.\nEngage your core and lift one leg off the ground, extending it straight up towards the ceiling.\nHold for a moment, then lower your leg back down.\nRepeat with the other leg.\nContinue alternating legs for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Uo1fDa9PKneGfG",
    "id": 677,
    "target": "triceps",
    "instructions": "Start by hanging from the rings with your arms fully extended and your body straight.\nLower your body by bending your elbows until your shoulders are below your elbows.\nPush yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/m-eQb5fz5-rzkQ",
    "id": 2571,
    "target": "glutes",
    "instructions": "Start by kneeling on the ground with your knees hip-width apart.\nPlace your hands on the ground in front of you for support.\nSlowly lean forward, shifting your weight onto your hands and extending your legs behind you.\nKeep your back straight and engage your glutes as you push your hips back and up towards the ceiling.\nHold this position for a few seconds, feeling a stretch in your glutes.\nSlowly return to the starting position by bending your knees and lowering your hips back down.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/kWeYfe5BIPLr6s",
    "id": 678,
    "target": "lats",
    "instructions": "Stand in front of a pull-up bar with your feet shoulder-width apart.\nReach up and grab the bar with an overhand grip, slightly wider than shoulder-width apart.\nHang from the bar with your arms fully extended and your body straight.\nEngage your back muscles and pull your body up towards the bar, leading with your chest.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/VFt0lIgr-jCxZy",
    "id": 685,
    "target": "cardiovascular system",
    "instructions": "Start by standing upright with your feet hip-width apart.\nEngage your core and keep your upper body relaxed.\nBegin jogging in place, lifting your knees up towards your chest and landing softly on the balls of your feet.\nMaintain a steady pace and continue jogging for the desired duration or distance.\nRemember to breathe deeply and maintain good posture throughout the exercise."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/xbwhTUl9kOYI41",
    "id": 684,
    "target": "cardiovascular system",
    "instructions": "Start by standing upright with your feet hip-width apart.\nEngage your core and keep your upper body relaxed.\nBegin jogging in place, lifting your knees up towards your chest and landing softly on the balls of your feet.\nMaintain a steady pace and continue jogging for the desired duration or distance.\nRemember to breathe deeply and maintain good posture throughout the exercise."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/IF77kgkpNUDGWX",
    "id": 1585,
    "target": "hamstrings",
    "instructions": "Stand with your feet hip-width apart.\nTake a step forward with your right foot, keeping your left foot planted.\nBend your right knee and lower your body down, keeping your left leg straight.\nPlace your hands on your right thigh for support.\nHold the stretch for 20-30 seconds, then switch sides and repeat."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/9VFCSf3mivcVAf",
    "id": 687,
    "target": "abs",
    "instructions": "Sit on the ground with your knees bent and feet flat on the floor.\nLean back slightly while keeping your back straight and your core engaged.\nHold your hands together in front of your chest or hold a weight if desired.\nLift your feet off the ground, balancing on your sit bones.\nTwist your torso to the right, bringing your hands or weight towards the right side of your body.\nPause for a moment, then twist your torso to the left, bringing your hands or weight towards the left side of your body.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/IdlawHnlinW6Xy",
    "id": 3012,
    "target": "traps",
    "instructions": "Start by standing with your feet shoulder-width apart and your arms extended in front of you.\nBend your knees slightly and hinge forward at the hips, keeping your back straight.\nLower your body by bending your elbows and retracting your shoulder blades, as if you are trying to squeeze a pencil between them.\nPause for a moment at the bottom, then push through your hands to extend your elbows and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/bGKl-iQqRfJA4S",
    "id": 3021,
    "target": "serratus anterior",
    "instructions": "Start in a high plank position with your hands directly under your shoulders and your body in a straight line.\nLower your chest towards the ground, keeping your elbows close to your body.\nAs you lower, squeeze your shoulder blades together and push your chest forward.\nPause for a moment at the bottom, then push back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/lhfyUzWOi9mo9K",
    "id": 688,
    "target": "traps",
    "instructions": "Start by hanging from a pull-up bar with your palms facing away from you and your arms fully extended.\nRetract your shoulder blades by pulling them down and back.\nEngage your back muscles and pull your body up towards the bar, focusing on squeezing your shoulder blades together.\nPause for a moment at the top of the movement, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/WXtR3gCE1o1xbs",
    "id": 3219,
    "target": "cardiovascular system",
    "instructions": "Stand with your feet shoulder-width apart.\nJump off the ground and simultaneously cross your right leg in front of your left leg.\nAs you land, quickly switch legs, crossing your left leg in front of your right leg.\nContinue alternating legs and jumping as quickly as possible.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/8NcdD7K2pm5TUi",
    "id": 1390,
    "target": "calves",
    "instructions": "Sit on the edge of a chair or bench with your feet flat on the ground.\nExtend one leg straight out in front of you, keeping your heel on the ground.\nLean forward slightly, feeling a stretch in your calf muscle.\nHold the stretch for 20-30 seconds.\nSwitch legs and repeat the stretch."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/d-oAX4BZXn8rIA",
    "id": 1424,
    "target": "glutes",
    "instructions": "Sit on the ground with your legs extended in front of you.\nBend your right knee and cross your right ankle over your left thigh.\nPlace your right hand on the ground behind you for support.\nWith your left hand, gently press down on your right knee to deepen the stretch.\nHold the stretch for 30 seconds to 1 minute.\nSwitch sides and repeat."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/ImgoPSC-GaUW7t",
    "id": 689,
    "target": "abs",
    "instructions": "Sit on a flat bench with your back straight and your feet flat on the ground.\nPlace your hands on the sides of the bench for support.\nKeeping your legs straight, slowly raise them up in front of you until they are parallel to the ground.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/4diyaNDAUftC4E",
    "id": 690,
    "target": "lats",
    "instructions": "Sit on the edge of a chair with your feet flat on the ground.\nPlace your hands on your thighs or on the sides of the chair for support.\nSlowly lean forward from your hips, keeping your back straight.\nFeel the stretch in your lower back and hold for 20-30 seconds.\nSlowly return to the starting position and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/6U5LtFNpgGYEvJ",
    "id": 2567,
    "target": "glutes",
    "instructions": "Sit on the ground with your legs extended in front of you.\nBend your right knee and place your right foot on the outside of your left knee.\nPlace your left elbow on the outside of your right knee and gently twist your torso to the right.\nHold the stretch for 20-30 seconds, then switch sides and repeat."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/okW38HBXW5DlA6",
    "id": 691,
    "target": "abs",
    "instructions": "Sit on the floor with your back against a wall and your legs extended in front of you.\nBend your knees and place your feet flat on the floor, hip-width apart.\nPlace your hands behind your head with your elbows pointing outwards.\nEngage your abs and lean to one side, bringing your elbow towards your hip.\nPause for a moment, then return to the starting position.\nRepeat on the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/yOP7Bte2n7hXZE",
    "id": 1587,
    "target": "hamstrings",
    "instructions": "Sit on the ground with your legs extended in a wide angle.\nFlex your feet and engage your quadriceps.\nPlace your hands on the ground behind you for support.\nKeeping your back straight, lean forward from your hips.\nContinue leaning forward until you feel a stretch in your hamstrings.\nHold this position for a few breaths.\nSlowly release the stretch and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/WrrVimjnpREqhU",
    "id": 697,
    "target": "hamstrings",
    "instructions": "Lie flat on your back on a mat or bench with your legs extended.\nPlace your hands by your sides or under your glutes for support.\nBend your knees and lift your feet off the ground, bringing your thighs towards your chest.\nPause for a moment at the top, then slowly lower your legs back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Y6o5WKug3PI6hF",
    "id": 1766,
    "target": "hamstrings",
    "instructions": "Lie face down on a leg curl machine with your legs extended and your ankles hooked under the padded lever.\nPlace your hands on the side handles of the machine for support.\nKeeping your upper body stationary, exhale and curl your legs upward as far as possible.\nHold the contracted position for a brief pause as you squeeze your hamstrings.\nSlowly lower your legs back to the starting position while inhaling.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/QeqzOBinb0eK7S",
    "id": 696,
    "target": "hamstrings",
    "instructions": "Lie flat on your back with your legs extended and your arms by your sides.\nBend your knees and place your feet flat on the ground, hip-width apart.\nLift your hips off the ground, engaging your glutes and hamstrings.\nSlowly curl your legs towards your glutes, keeping your hips lifted.\nPause for a moment at the top, then slowly extend your legs back to the starting position.\nLower your hips back down to the ground.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/aIP773KhN9n6nJ",
    "id": 3222,
    "target": "cardiovascular system",
    "instructions": "Stand with your feet shoulder-width apart.\nBend your knees and lower your body into a squat position.\nJump explosively, extending your hips and knees while swinging your arms for momentum.\nLand softly on the balls of your feet and immediately go into the next repetition.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/3DDbYZkuRhcDOj",
    "id": 3656,
    "target": "cardiovascular system",
    "instructions": "Find an open space or a treadmill to perform the exercise.\nStand tall with your feet hip-width apart.\nStart jogging in place, lifting your knees high and pumping your arms.\nAfter a few seconds, start taking short strides forward, maintaining a quick pace.\nContinue running with short strides for the desired duration or distance."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/IYRZHG0LuRY8Iu",
    "id": 1763,
    "target": "lats",
    "instructions": "Grab the pull-up bar with a shoulder-width grip, palms facing away from you.\nHang freely with your arms fully extended.\nEngage your back muscles and pull your body up towards the bar until your chin is above the bar.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/JXGF2luF3P3N3b",
    "id": 3699,
    "target": "abs",
    "instructions": "Start in a high plank position with your hands directly under your shoulders and your body in a straight line.\nEngage your core and lift your right hand off the ground, reaching across to tap your left shoulder.\nPlace your right hand back on the ground and repeat with your left hand tapping your right shoulder.\nContinue alternating shoulder taps while keeping your hips and torso stable.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/vOyAjLy0KNhmNX",
    "id": 699,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands slightly wider than shoulder-width apart and your body in a straight line from head to heels.\nLower your body towards the ground by bending your elbows, keeping them close to your sides.\nAs you push back up, lift your right hand off the ground and tap your left shoulder.\nReturn your right hand to the ground and repeat the push-up, this time lifting your left hand and tapping your right shoulder.\nContinue alternating shoulder taps with each push-up repetition.\nMaintain a stable core and avoid excessive hip rotation throughout the exercise.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/d2dbVNOF-w9c5f",
    "id": 1774,
    "target": "abductors",
    "instructions": "Lie on your side with your legs extended and stacked on top of each other.\nProp yourself up on your forearm, keeping your elbow directly below your shoulder.\nEngage your core and lift your hips off the ground, creating a straight line from your head to your feet.\nWhile keeping your core engaged, lift your top leg as high as possible without rotating your hips.\nPause for a moment at the top, then lower your leg back down.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/A1VQmZrkz6vy86",
    "id": 705,
    "target": "abs",
    "instructions": "Lie on your side with your legs extended and stacked on top of each other.\nPlace your forearm on the ground directly below your shoulder, with your elbow bent at a 90-degree angle.\nEngage your core and lift your hips off the ground, creating a straight line from your head to your feet.\nHold this position for the desired amount of time.\nLower your hips back down to the starting position.\nRepeat on the other side."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/OTzvtUmnwVpdys",
    "id": 709,
    "target": "abs",
    "instructions": "Stand between two parallel bars with your feet shoulder-width apart.\nPlace your hands on the bars and lift your body off the ground, supporting your weight on your arms.\nEngage your abs and slowly lift your legs to the side, keeping them straight.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/glIjnOxQHBguXf",
    "id": 710,
    "target": "abductors",
    "instructions": "Stand with your feet shoulder-width apart and your hands on your hips.\nShift your weight to one leg and lift the opposite leg out to the side, keeping it straight.\nPause for a moment at the top, then slowly lower your leg back down to the starting position.\nRepeat on the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/RbXgSTFsh3KOOD",
    "id": 1358,
    "target": "lats",
    "instructions": "Lie on your side with your legs straight and your bottom arm extended straight overhead.\nBend your top knee and place your foot on the ground in front of your bottom leg.\nReach your top arm over your head and grab onto something stable, like a wall or a piece of furniture.\nSlowly lift your bottom leg off the ground, keeping it straight, until you feel a stretch in your side.\nHold the stretch for 20-30 seconds, then slowly lower your leg back down.\nRepeat on the other side."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/HFC5XmNAdF39Bl",
    "id": 3667,
    "target": "adductors",
    "instructions": "Lie on your side with your legs straight and stacked on top of each other.\nPlace your bottom arm under your head for support.\nEngage your adductors and lift your top leg as high as possible without rotating your hips or leaning backward.\nPause for a moment at the top, then slowly lower your leg back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/fuRgKRbFPPWVXB",
    "id": 1775,
    "target": "adductors",
    "instructions": "Start by lying on your side with your legs extended and stacked on top of each other.\nProp yourself up on your forearm, keeping your elbow directly below your shoulder.\nEngage your core and lift your hips off the ground, creating a straight line from your head to your feet.\nWhile maintaining the side plank position, lift your top leg towards the ceiling, keeping it straight.\nSlowly lower your leg back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/GctFaSrcD677K7",
    "id": 717,
    "target": "triceps",
    "instructions": "Start by lying on your side with your legs extended and stacked on top of each other.\nPlace your bottom hand on the ground directly under your shoulder, fingers pointing forward.\nPress through your bottom hand to lift your body off the ground, keeping your legs straight and your core engaged.\nExtend your top arm straight up towards the ceiling, creating a straight line from your head to your heels.\nLower your body back down to the starting position with control.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/QoXGoALaH6XYqu",
    "id": 721,
    "target": "forearms",
    "instructions": "Stand with your feet shoulder-width apart and your arms extended in front of you.\nExtend your right arm out to the side, parallel to the ground, with your palm facing down.\nWith your left hand, grab your right hand and gently pull it towards your body, feeling a stretch in your right forearm.\nHold the stretch for 15-30 seconds, then release.\nRepeat on the other side."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/F8oB0GM2xuvV0x",
    "id": 720,
    "target": "lats",
    "instructions": "Stand with your feet shoulder-width apart and your knees slightly bent.\nGrasp a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.\nHang from the bar with your arms fully extended and your body relaxed.\nPull yourself up by bending your elbows and bringing your chin towards the bar, while keeping your body straight.\nOnce your chin is above the bar, lower yourself back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/LuoYR-RnGqNDOS",
    "id": 3213,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart and your arms extended to the sides.\nBend at the waist to the right, reaching your right hand towards your right foot while keeping your left hand extended to the side.\nReturn to the starting position and then bend at the waist to the left, reaching your left hand towards your left foot while keeping your right hand extended to the side.\nRepeat the side-to-side bending motion for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/cMrzcHaaF6gNlJ",
    "id": 725,
    "target": "pectorals",
    "instructions": "Start in a push-up position with your hands shoulder-width apart and one hand placed slightly wider than the other.\nEngage your core and lower your body towards the ground by bending your elbows, keeping your back straight.\nAs you lower yourself, shift your weight to one side and lift the opposite arm off the ground, extending it straight out to the side.\nPush through your chest and triceps to raise your body back up to the starting position, while simultaneously lowering your extended arm back to the ground.\nRepeat the movement, alternating the arm you extend with each repetition."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/3PfsviHiagT7F5",
    "id": 3645,
    "target": "glutes",
    "instructions": "Lie on your back with your knees bent and feet flat on the ground.\nExtend one leg straight out in front of you.\nEngage your glutes and lift your hips off the ground, forming a straight line from your knees to your shoulders.\nHold for a moment at the top, then slowly lower your hips back down to the starting position.\nRepeat for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/tMivqE42RzmEyx",
    "id": 727,
    "target": "calves",
    "instructions": "Stand with your feet hip-width apart and hold a dumbbell in one hand.\nLift one foot off the ground and balance on the other foot.\nSlowly raise your heel as high as possible, using your calf muscles.\nPause for a moment at the top, then slowly lower your heel back down.\nRepeat for the desired number of repetitions, then switch to the other leg."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/sTHhNisUrzARL7",
    "id": 730,
    "target": "hamstrings",
    "instructions": "Start by standing with one foot on a platform or slide board.\nBend your knee slightly and slide the foot on the platform backward, extending your leg.\nKeep your core engaged and maintain a straight posture throughout the movement.\nSlowly return to the starting position by sliding your foot back to the initial position.\nRepeat the movement for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/kGjeo5DTt6O8n0",
    "id": 1759,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart and arms extended in front of you.\nLift your right foot off the ground and extend it forward.\nSlowly lower your body down by bending your left knee and pushing your hips back.\nKeep your chest up and your back straight as you lower yourself down.\nLower until your left thigh is parallel to the ground, or as low as you can comfortably go.\nPause for a moment at the bottom, then push through your left heel to return to the starting position.\nRepeat for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/4bi8fXuvzCr1mU",
    "id": 1489,
    "target": "quads",
    "instructions": "Stand with your feet shoulder-width apart and your toes pointing slightly outward.\nHold onto a stable object for balance if needed.\nSlowly lower your body by bending your knees and leaning back, keeping your torso upright.\nContinue lowering until your thighs are parallel to the ground or as far as you can comfortably go.\nPause for a moment, then push through your heels to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/wK12ZBw1b5tURO",
    "id": 735,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/J4aqtkDoZW1YG0",
    "id": 3679,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nCross your arms over your chest.\nEngaging your abs, lift your upper body off the ground towards your knees.\nPause for a moment at the top, then slowly lower your upper body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/cX-jY6ZbbcN2sI",
    "id": 3361,
    "target": "cardiovascular system",
    "instructions": "Stand with your feet shoulder-width apart.\nBend your knees slightly and jump to the right, landing on your right foot.\nAs you land, swing your left leg behind your right leg and tap the ground with your left toes.\nImmediately jump to the left, landing on your left foot.\nAs you land, swing your right leg behind your left leg and tap the ground with your right toes.\nContinue alternating sides, jumping and tapping the ground with each leg.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/otp7oFGiqxrcch",
    "id": 3671,
    "target": "cardiovascular system",
    "instructions": "Stand with your feet shoulder-width apart.\nBend your knees slightly and keep your back straight.\nJump to the right, landing on your right foot while swinging your left leg behind your right leg.\nImmediately jump to the left, landing on your left foot while swinging your right leg behind your left leg.\nContinue alternating jumps from side to side, mimicking a skiing motion.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/UORwJwlisOpCC0",
    "id": 3304,
    "target": "upper back",
    "instructions": "Start by hanging from a bar with your arms fully extended and your body relaxed.\nEngage your core and lift your legs up, bringing your knees towards your chest.\nContinue to lift your legs up and over your head, allowing your body to pass through the arms.\nOnce your legs are fully extended over your head, begin to lower them back down towards the starting position.\nAs you lower your legs, allow your body to pass back through the arms until you are hanging with your arms fully extended again.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "dumbbell",
    "gifUrl": "https://v2.exercisedb.io/image/AkZ4qHHNBNRiSO",
    "id": 777,
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart and hold a dumbbell in one hand.\nBend your knees slightly and hinge forward at the waist, keeping your back straight.\nExtend your arm with the dumbbell towards the opposite foot, rotating your torso as you do so.\nReturn to the starting position and repeat on the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/iIgVrhtuHiG9h6",
    "id": 1362,
    "target": "spine",
    "instructions": "Lie face down on the ground with your forearms flat on the floor, elbows directly under your shoulders.\nEngage your core and lift your chest off the ground, keeping your forearms and toes on the floor.\nHold this position for a few seconds, making sure to keep your neck in a neutral position.\nSlowly lower your chest back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/26K4gsGpN5k2Jm",
    "id": 778,
    "target": "glutes",
    "instructions": "Start in a push-up position with your hands slightly wider than shoulder-width apart and your feet together.\nBring your right knee towards your right elbow, keeping it off the ground.\nAs you bring your right knee back, simultaneously lower your body towards the ground by bending your elbows.\nPush back up to the starting position and repeat with your left knee towards your left elbow.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/In-fISLmTQaUU1",
    "id": 1363,
    "target": "spine",
    "instructions": "Sit on the ground with your legs extended in front of you.\nPlace your hands on the ground behind you, fingers pointing towards your body.\nEngage your core and slowly lean back, keeping your back straight.\nContinue leaning back until you feel a stretch in your spine.\nHold the stretch for a few seconds, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/3OP7DphyRZy3qe",
    "id": 2329,
    "target": "abs",
    "instructions": "Sit on the ground with your legs extended in front of you.\nBend your knees and place your feet flat on the ground, hip-width apart.\nPlace your hands behind your head with your elbows pointing outwards.\nEngage your abs and slowly twist your torso to the right, bringing your right elbow towards your left knee.\nPause for a moment at the end of the twist, then slowly return to the starting position.\nRepeat the twist to the left side, bringing your left elbow towards your right knee.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/EdZGjtim6TfPKN",
    "id": 2368,
    "target": "quads",
    "instructions": "Stand with your feet shoulder-width apart.\nTake a step forward with one foot and place it about two feet in front of the other foot.\nLower your body by bending your knees and hips, keeping your back straight.\nContinue lowering until your front thigh is parallel to the ground, and your back knee is hovering just above the ground.\nPause for a moment, then push through your front heel to return to the starting position.\nRepeat for the desired number of repetitions, then switch legs and repeat."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/aLziTflWUE2JAf",
    "id": 1685,
    "target": "quads",
    "instructions": "Stand with your feet shoulder-width apart and toes slightly turned out.\nLower your body down into a squat position by bending your knees and pushing your hips back.\nAs you come up from the squat, extend your arms overhead, reaching towards the ceiling.\nReturn to the starting position by lowering your arms and bending your knees to squat down again.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/p6cZ6acN94RMJE",
    "id": 1686,
    "target": "quads",
    "instructions": "Stand with your feet shoulder-width apart and toes slightly turned out.\nLower your body into a squat position by bending your knees and pushing your hips back.\nAs you come up from the squat, raise your arms overhead and twist your torso to one side.\nReturn to the starting position and repeat the squat, this time twisting your torso to the opposite side.\nContinue alternating sides with each squat repetition."
  },
  {
    "bodyPart": "waist",
    "equipment": "stability ball",
    "gifUrl": "https://v2.exercisedb.io/image/GpID4wiNKTTAjg",
    "id": 2297,
    "target": "abs",
    "instructions": "Sit on the stability ball with your feet flat on the ground and your knees bent at a 90-degree angle.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, slowly curl your upper body forward, bringing your chest towards your knees.\nPause for a moment at the top, then slowly lower your upper body back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/5cmls8QfIh9LnU",
    "id": 3291,
    "target": "triceps",
    "instructions": "Start by standing with your feet shoulder-width apart and your arms extended overhead.\nBend your knees slightly and engage your core.\nLower your body down into a squat position while keeping your arms extended overhead.\nAs you squat down, press your arms down towards the ground, engaging your triceps.\nPause for a moment at the bottom of the squat, then push through your heels to stand back up while simultaneously raising your arms back overhead.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/TUAe2bhX1EkstU",
    "id": 3669,
    "target": "upper back",
    "instructions": "Stand with your feet shoulder-width apart and your knees slightly bent.\nExtend your arms straight out in front of you at shoulder height, parallel to the ground.\nRotate your torso to the right, keeping your arms extended and your back straight.\nAs you rotate, extend your right arm forward and your left arm back, mimicking the motion of drawing a bowstring.\nHold the position for a moment, then return to the starting position.\nRepeat the motion, this time rotating your torso to the left and extending your left arm forward and your right arm back.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/u5D8GKXAAMS4Zg",
    "id": 1490,
    "target": "calves",
    "instructions": "Stand on the edge of a step or a sturdy platform with your heels hanging off and your toes on the step.\nHold onto a railing or wall for balance if needed.\nSlowly raise your heels as high as possible, lifting your body weight onto the balls of your feet.\nPause for a moment at the top, then slowly lower your heels back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/C3QLHvS3AN3D07",
    "id": 1397,
    "target": "calves",
    "instructions": "Stand with your feet shoulder-width apart, toes pointing forward.\nRaise your heels off the ground as high as possible, standing on your toes.\nHold the position for a moment, then slowly lower your heels back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "lower legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/WEQEuNDu2XrLhH",
    "id": 1398,
    "target": "calves",
    "instructions": "Stand facing a wall or sturdy object, about an arm's length away.\nPlace your hands on the wall or object at shoulder height.\nStep back with one foot, keeping your heel flat on the ground.\nBend your front knee slightly and lean forward, keeping your back leg straight.\nYou should feel a stretch in your calf muscle.\nHold the stretch for 20-30 seconds.\nRepeat on the other leg."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/K28QI8LcmUeBUE",
    "id": 794,
    "target": "lats",
    "instructions": "Stand with your feet shoulder-width apart and your knees slightly bent.\nExtend your arms straight out to the sides, parallel to the ground.\nSlowly lean your upper body to one side, feeling a stretch in your side and lats.\nHold the stretch for 15-30 seconds.\nReturn to the starting position and repeat on the other side.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/0tv9ym-lgGwKgJ",
    "id": 795,
    "target": "hamstrings",
    "instructions": "Stand with your feet hip-width apart and your hands on your hips.\nShift your weight onto your left leg and lift your right foot off the ground, bending your knee.\nSlowly curl your right heel towards your glutes, squeezing your hamstring.\nPause for a moment at the top, then slowly lower your right foot back down to the starting position.\nRepeat for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "waist",
    "equipment": "wheel roller",
    "gifUrl": "https://v2.exercisedb.io/image/ihraYnywgymxry",
    "id": 796,
    "target": "abs",
    "instructions": "Start by standing tall with your feet shoulder-width apart and the wheel roller in front of you.\nBend at your waist and slowly roll the wheel forward, keeping your back straight and your core engaged.\nContinue rolling forward until you feel a stretch in your abs and your body is extended as far as possible.\nPause for a moment, then slowly roll the wheel back towards your body, returning to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/c3a-G9GZTOx-Pc",
    "id": 3223,
    "target": "cardiovascular system",
    "instructions": "Stand with your feet shoulder-width apart and your arms by your sides.\nBend your knees slightly and jump up explosively.\nAs you jump, spread your legs and extend your arms out to the sides, forming a star shape with your body.\nLand softly on the balls of your feet with your knees slightly bent.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/FLZC58NSzV2JcI",
    "id": 3314,
    "target": "abs",
    "instructions": "Start by hanging from a pair of rings with your arms fully extended and your body in a straight line.\nSpread your legs wide apart, forming a straddle position.\nEngage your core and slowly lower your body until your arms are parallel to the ground.\nHold this position for a few seconds, then push yourself back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/TOUBtbGKkdjGRE",
    "id": 3298,
    "target": "abs",
    "instructions": "Start in a push-up position with your hands shoulder-width apart and your feet spread wide apart.\nEngage your core and slowly shift your weight forward, bringing your shoulders over your hands.\nBend your elbows and lower your body towards the ground, keeping your elbows close to your sides.\nPause for a moment at the bottom, then push through your hands to straighten your arms and lift your body back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/TTrLAw8lDObj5u",
    "id": 1427,
    "target": "abductors",
    "instructions": "Lie on your side with your legs straight and stacked on top of each other.\nPlace your bottom arm under your head for support.\nEngage your core and lift your top leg as high as possible without rotating your hips or leaning backward.\nPause for a moment at the top, then slowly lower your leg back down to the starting position.\nRepeat for the desired number of repetitions, then switch sides."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/zXAScVnSA5Q3dQ",
    "id": 803,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands slightly wider than shoulder-width apart and your feet together.\nEngage your core and lower your body towards the ground, keeping your elbows close to your sides.\nAs you lower your body, simultaneously lift your right arm and left leg off the ground, extending them straight out.\nPause for a moment at the top, then lower your arm and leg back down while pushing yourself back up to the starting position.\nRepeat the movement, this time lifting your left arm and right leg.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/kJU6qstW-ASGW7",
    "id": 805,
    "target": "abs",
    "instructions": "Attach a suspension trainer to a high anchor point and adjust the straps to waist height.\nStand facing away from the anchor point and hold the handles with your arms extended in front of you.\nLean forward at the waist, keeping your body straight and your core engaged.\nLower your body as far as you can while maintaining control and tension in your abs.\nPause for a moment at the bottom, then slowly raise your body back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/YaVP7W1ZUHBua1",
    "id": 806,
    "target": "pectorals",
    "instructions": "Find a suspension trainer and adjust it to an appropriate height.\nStand facing away from the anchor point and hold the handles with an overhand grip.\nWalk your feet forward, leaning your body forward until your weight is supported by the suspension trainer.\nKeep your body straight from head to heels, engage your core, and lower your chest towards the handles.\nPush through your chest and arms to return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/aeToUf0lkaHXsl",
    "id": 807,
    "target": "abs",
    "instructions": "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.\nEngage your core and lift your knees up towards your chest, curling your pelvis towards your ribcage.\nPause for a moment at the top, then slowly lower your knees back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/AG8WHkP7URpPTM",
    "id": 808,
    "target": "upper back",
    "instructions": "Set up a suspension trainer at an appropriate height.\nStand facing the anchor point with your feet shoulder-width apart.\nHold the handles with an overhand grip, palms facing each other.\nLean back, keeping your body straight and your heels on the ground.\nPull your chest towards the handles, squeezing your shoulder blades together.\nPause for a moment at the top, then slowly lower yourself back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/lL7beS2SQ11BS9",
    "id": 809,
    "target": "quads",
    "instructions": "Stand facing away from a suspension trainer with your feet shoulder-width apart.\nExtend one leg forward and place the top of your foot in the foot cradle of the suspension trainer.\nBend your standing leg and lower your body down into a lunge position, keeping your chest up and your knee in line with your toes.\nPush through your heel to return to the starting position.\nRepeat for the desired number of repetitions, then switch legs."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/MtGKeBIuVX10uL",
    "id": 3433,
    "target": "glutes",
    "instructions": "Lie face down on a mat with your arms extended overhead.\nEngage your core and lift your chest and legs off the ground simultaneously.\nKick your legs up and down in a fluttering motion, as if you were swimming.\nContinue kicking for the desired number of repetitions.\nLower your chest and legs back down to the starting position."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Ri7ki2YFoYKUWE",
    "id": 3318,
    "target": "cardiovascular system",
    "instructions": "Stand with your feet shoulder-width apart and knees slightly bent.\nHold your arms straight out in front of you, parallel to the ground.\nEngage your core and swing your arms in a circular motion, rotating your torso as you do so.\nContinue the circular motion, swinging your arms and rotating your torso for the desired number of repetitions.\nRemember to breathe throughout the exercise."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/PS708wLdvuiRLg",
    "id": 1753,
    "target": "triceps",
    "instructions": "Sit on a bench with your hands gripping the edge, fingers pointing forward.\nSlide your butt off the bench, supporting your weight with your hands.\nBend your elbows and lower your body until your upper arms are parallel to the ground.\nPush yourself back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/iz2WOGGnqgBZ5h",
    "id": 814,
    "target": "triceps",
    "instructions": "Sit on the edge of a bench or chair with your hands gripping the edge, fingers pointing forward.\nSlide your butt off the bench, supporting your weight with your hands.\nBend your elbows and lower your body towards the ground, keeping your back close to the bench.\nPause for a moment at the bottom, then push yourself back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/zsFSF7oFyrCyhs",
    "id": 812,
    "target": "triceps",
    "instructions": "Sit on the edge of a bench with your hands gripping the edge, fingers pointing forward.\nWalk your feet forward, sliding your butt off the bench, and straighten your arms.\nBend your elbows and lower your body towards the ground, keeping your back close to the bench.\nPush through your palms to straighten your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/NnEu6yiZJFDkgM",
    "id": 813,
    "target": "triceps",
    "instructions": "Sit on a bench with your hands gripping the edge of the bench, fingers pointing forward.\nSlide your butt off the bench, supporting your weight with your hands.\nBend your elbows and lower your body towards the ground, keeping your back close to the bench.\nPause for a moment at the bottom, then push yourself back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/EQHqU97CG8jebi",
    "id": 815,
    "target": "triceps",
    "instructions": "Sit on the edge of a chair or bench with your hands next to your hips, fingers pointing forward.\nSlide your butt off the front of the chair with your legs extended in front of you.\nStraighten your arms, keeping a little bend in your elbows to keep tension on your triceps and off your elbow joints.\nSlowly bend your elbows to lower your body toward the floor until your elbows are at about a 90-degree angle.\nOnce you reach the bottom of the movement, press down into the chair to straighten your elbows, returning to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/guUsJAvaRGVAf6",
    "id": 816,
    "target": "triceps",
    "instructions": "Stand with your feet shoulder-width apart and your knees slightly bent.\nExtend your arms straight out in front of you, parallel to the ground.\nBend your elbows and lower your body towards the ground, keeping your upper arms close to your sides.\nPause for a moment at the bottom, then push yourself back up to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/2H7QBWiKeVc4L4",
    "id": 817,
    "target": "triceps",
    "instructions": "Stand or sit upright with your back straight.\nExtend one arm overhead, bending it at the elbow.\nPlace your opposite hand on the bent elbow and gently pull it towards your head.\nHold the stretch for 15-30 seconds, feeling a gentle stretch in your triceps.\nRelease the stretch and repeat on the other arm."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/XPi15L08izmmE8",
    "id": 871,
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground.\nPlace your hands behind your head with your elbows pointing outwards.\nEngaging your abs, lift your shoulder blades off the ground and bring your knees towards your chest, simultaneously curling your upper body towards your knees.\nPause for a moment at the top, then slowly lower your shoulder blades and extend your legs back to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/nVhrvfDChvvvx2",
    "id": 1466,
    "target": "glutes",
    "instructions": "Lie on your back with your knees bent and feet flat on the ground.\nPlace your hands by your sides for support.\nEngage your glutes and lift your hips off the ground, forming a straight line from your knees to your shoulders.\nWhile keeping your hips lifted, twist your lower body to the right side, bringing your knees towards the ground.\nReturn to the starting position and repeat the twist to the left side.\nContinue alternating twists for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/5OFw2MuJXqOh3Y",
    "id": 2802,
    "target": "abs",
    "instructions": "Lie flat on your back with your legs extended and your arms by your sides.\nPlace your hands under your glutes for support.\nEngage your abs and lift both legs off the ground, keeping them straight.\nAs you lift your legs, twist your hips to one side, bringing your legs towards your opposite shoulder.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat the movement, this time twisting your hips to the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/yHqzil1cGNkaFI",
    "id": 2801,
    "target": "abs",
    "instructions": "Lie flat on your back with your legs extended and your arms by your sides.\nBend your knees and lift your legs off the ground, bringing them towards your chest.\nAs you lift your legs, twist your hips to one side, bringing your knees towards your opposite shoulder.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat the movement, this time twisting your hips to the other side.\nContinue alternating sides for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/Ll3wfRsFZjOQet",
    "id": 3231,
    "target": "spine",
    "instructions": "Stand with your feet shoulder-width apart and your arms extended out to the sides.\nBend forward at the waist, keeping your back straight and your knees slightly bent.\nReach down towards your toes with both hands, keeping your legs straight.\nPause for a moment at the bottom, then slowly return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/cdsNwwc-V0fSKG",
    "id": 1365,
    "target": "upper back",
    "instructions": "Stand up straight with your feet shoulder-width apart.\nExtend your arms straight in front of you, parallel to the ground.\nInterlace your fingers and rotate your palms away from your body.\nSlowly raise your arms overhead, keeping them straight and parallel to each other.\nAs you raise your arms, squeeze your shoulder blades together.\nHold the stretch for 15-30 seconds, then release and repeat."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/KqQpx3FA8VdzLR",
    "id": 1366,
    "target": "spine",
    "instructions": "Lie face down on the floor with your legs extended behind you.\nPlace your hands on the floor next to your lower ribs, fingers pointing forward.\nPress your hands firmly into the floor and straighten your arms, lifting your torso and thighs off the ground.\nRoll your shoulders back and down, opening your chest and lifting your gaze towards the ceiling.\nHold this position for a few breaths, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/480XCyHBEbmJep",
    "id": 3420,
    "target": "abs",
    "instructions": "Sit on the floor with your legs extended in front of you.\nLean back slightly and lift your legs off the ground, keeping them straight.\nSimultaneously, lift your upper body off the ground and reach your arms towards your legs.\nHold this position for a few seconds, then slowly lower your upper body and legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/t9O5n8qJ2tzAFp",
    "id": 826,
    "target": "abs",
    "instructions": "Hang from the parallel bars with your arms fully extended and your body straight.\nEngage your core and lift your legs up in front of you, keeping them straight.\nContinue lifting until your legs are parallel to the ground or slightly higher.\nPause for a moment at the top, then slowly lower your legs back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/lxPbS3oZpFu-RK",
    "id": 3655,
    "target": "cardiovascular system",
    "instructions": "Stand with your feet hip-width apart.\nLift your right knee up towards your chest as high as you can while balancing on your left leg.\nStep forward with your right foot and lower your body into a lunge position, bending both knees to a 90-degree angle.\nPush off with your right foot and bring your left knee up towards your chest.\nStep forward with your left foot and lower your body into a lunge position.\nContinue alternating legs and lunging forward, keeping your core engaged and maintaining a steady pace.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/tuoY9CJaezTS1F",
    "id": 1460,
    "target": "glutes",
    "instructions": "Stand with your feet shoulder-width apart.\nTake a step forward with your right leg, lowering your body into a lunge position.\nKeep your torso upright and your front knee aligned with your ankle.\nPush off with your right foot and bring your left foot forward, stepping into a lunge position with your left leg.\nContinue alternating legs and walking forward, maintaining a controlled and steady pace.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper arms",
    "equipment": "medicine ball",
    "gifUrl": "https://v2.exercisedb.io/image/4UQsfsLF6EuTvg",
    "id": 847,
    "target": "biceps",
    "instructions": "Sit on a stability ball with your feet flat on the ground and your back straight.\nHold a medicine ball with an underhand grip, palms facing up, and let your arms hang down by your sides.\nKeeping your upper arms stationary, exhale and curl the medicine ball up towards your shoulders.\nPause for a moment at the top, squeezing your biceps.\nInhale and slowly lower the medicine ball back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "wheel roller",
    "gifUrl": "https://v2.exercisedb.io/image/Dg9tDT9L8dRNIG",
    "id": 857,
    "target": "abs",
    "instructions": "Kneel on the floor and place the wheel roller in front of you.\nPlace your hands on the handles of the wheel roller and extend your arms straight out in front of you.\nEngage your core muscles and slowly roll the wheel forward, keeping your back straight and your abs tight.\nContinue rolling forward until your body is fully extended and your arms are overhead.\nPause for a moment, then slowly roll the wheel back towards your knees, maintaining control and keeping your abs engaged.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "cardio",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/g57PpJlPVoBflL",
    "id": 3637,
    "target": "cardiovascular system",
    "instructions": "Start in a plank position with your hands on the wheel and your body straight.\nEngage your core and start rolling the wheel forward by extending your arms.\nContinue rolling until your body is fully extended and your arms are overhead.\nReverse the movement by pulling the wheel back towards your body, using your core and arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/80UfEZjGykV752",
    "id": 1429,
    "target": "lats",
    "instructions": "Hang from a pull-up bar with your palms facing away from you and your hands wider than shoulder-width apart.\nEngage your core and squeeze your shoulder blades together.\nPull your body up towards the bar until your chin is above the bar.\nLower your body back down to the starting position with control.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/qoVqViZhQs0rqY",
    "id": 1367,
    "target": "lats",
    "instructions": "Grab the pull-up bar with a wide overhand grip, hands slightly wider than shoulder-width apart.\nHang from the bar with your arms fully extended and your body straight.\nEngage your back muscles and pull your body up towards the bar, leading with your chest.\nContinue pulling until your chin is above the bar.\nPause for a moment at the top, then slowly lower your body back down to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/c-mTSuha5gq8Y9",
    "id": 1311,
    "target": "pectorals",
    "instructions": "Start in a high plank position with your hands wider than shoulder-width apart.\nKeep your body in a straight line from head to toe.\nLower your chest towards the ground by bending your elbows, keeping them close to your sides.\nPush through your palms to extend your arms and return to the starting position.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/xF43jN-aOYeCJy",
    "id": 2363,
    "target": "pectorals",
    "instructions": "Position yourself on the parallel bars with your arms fully extended and your body suspended in the air.\nLean forward slightly and lower your body by bending your elbows until your chest is just above the bars.\nPause for a moment, then push yourself back up to the starting position by straightening your arms.\nRepeat for the desired number of repetitions."
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/YSgBKDxnov8wDV",
    "id": 858,
    "target": "abs",
    "instructions": "Find an open space or a track to perform the exercise.\nStart by standing with your feet shoulder-width apart.\nBegin running as fast as you can, pumping your arms and driving your knees up.\nContinue sprinting for a specific distance or time period.\nRest and repeat for the desired number of repetitions."
  },
  {
    "bodyPart": "upper legs",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/113dqQrzTriBdq",
    "id": 1604,
    "target": "hamstrings",
    "instructions": "Start in a lunge position with your right foot forward and your left foot back.\nPlace your hands on the ground on either side of your right foot.\nLower your left knee to the ground and extend your right leg, keeping your right foot flat on the ground.\nRotate your torso to the right, reaching your right arm up towards the ceiling.\nHold this position for a few seconds, then return to the starting position.\nSwitch sides and repeat the stretch with your left foot forward."
  },
  {
    "bodyPart": "lower arms",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/6ZNmMRGyU8VZNk",
    "id": 1428,
    "target": "forearms",
    "instructions": "Extend your arms straight out in front of you.\nMake a fist with both hands.\nRotate your wrists in a circular motion, keeping your arms still.\nContinue the wrist circles for the desired number of repetitions."
  }
]
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('exercises').del();
  await knex('exercises').insert(exercises);
};
