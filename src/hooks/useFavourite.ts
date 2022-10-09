import { useMemo } from "react";
import { useFavoritesStore } from "./useFavouritesStore";

export const useFavourite = (name?: string, path?: string) => {
  const { likes, addLike, removeLike } = useFavoritesStore();
  const isLiked = useMemo<boolean>(() => {
    if (!name) {
      return false;
    }
    return likes.find((like) => like.name === name) != null;
  }, [likes, name]);

  const onToggleLike = () => {
    if (!name || !path) return;
    isLiked ? removeLike(name) : addLike({ name: name, path });
  };

  return { isLiked, onToggleLike };
};
