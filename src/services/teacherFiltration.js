export const handleFilter = (teachers, filters) => {
  const { languages, levels, price_per_hour } = filters;
  if (!teachers) {
    return [];
  }
  if (!languages && !levels && !price_per_hour) {
    return [];
  }

  const filteredTeacherArray = teachers.filter((teacher) => {
    let matches = true;

    if (filters.languages) {
      matches = matches && teacher.languages.includes(filters.languages);
    }

    if (filters.levels) {
      matches = matches && teacher.levels.includes(filters.levels);
    }

    if (filters.price_per_hour) {
      matches =
        matches &&
        Number(teacher.price_per_hour) === Number(filters.price_per_hour);
    }
    return matches;
  });

  if (filteredTeacherArray.length > 0) {
    return filteredTeacherArray;
  } else {
    return [];
  }
};
