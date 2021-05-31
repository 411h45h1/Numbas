import firebase from "../firebase";
import "firebase/firestore";

const db = firebase.firestore();

// Read
export const getPositions = async (storedUID) => {
  const collection = db
    .collection("v1")
    .doc(`${storedUID}`)
    .collection("positions");

  const positions = await collection.get();
  return positions.docs.map((doc) => {
    return { pid: doc.id, ...doc.data() };
  });
};

// Update
export const updatePosition = async (updateData) => {
  const collection = db.collection("v1").doc(updateData.bid.toString());

  const res = await collection.update(updateData);

  return res;
};

// Create
export const addPosition = async (lift, storedUID) => {
  // if uid exists in storage use that

  const { bench, deadlift, shoulderPress, squat } = lift;
  const collection = db.collection("v1");
  const pid = Date.now() + Math.floor(Math.random() * 9999) + 1;

  const req = await collection
    .doc(`${storedUID}`)
    .collection("exercises")
    .doc(pid.toString())
    .set({
      pid: pid,
      bench,
      deadlift,
      shoulderPress,
      squat,
      liftSum: [
        Number(bench),
        Number(deadlift),
        Number(shoulderPress),
        Number(squat),
      ].reduce((a, b) => a + b, 0),
      dateLabel: `${new Date().getMonth()}/${new Date().getDate()}`,
      dateRecorded: `${new Date()
        .toString()
        .split(" ")
        .splice(1, 3)
        .join(" ")} ( ${new Date().toLocaleTimeString()} )`,
    });
  return req;
};

// Delete
export const deletePosition = async (pid, storedUID) => {
  const collection = db.collection("v1");

  const req = await collection
    .doc(`${storedUID}`)
    .collection("exercises")
    .doc(pid.toString())
    .delete();

  return req;
};
