type UpdateData = {
  title: string;
  img: string;
  body: string;
};

export const updateData = async (id: number, updatedData: UpdateData) => {
  const res = await fetch(`http://localhost:4000/post/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  const data = await res.json();
  if (!res.ok) throw new Error("failed to edited post");
  return data;
};
