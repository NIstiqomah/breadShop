import { useEffect } from "react";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../store/action/product";

export default function Counter() {
  const product = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData() as any);
  }, []);

  return (
    <div>
      {!product.isLoading
        ? Array.isArray(product.data) &&
          product.data.map((item: any) => (
            <p key={item.title}>{item.title}</p>
          ))
        : "Loading Data"}
    </div>
  );
}
