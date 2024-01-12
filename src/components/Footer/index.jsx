const Footer = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-based, so add 1
  const day = today.getDate();

  const readableDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;

  return (
    <div className="text-xs font-poppins text-center mb-5 border-t border-t-slate-100 dark:border-t-slate-900">
      <p className="mb-2 mt-5">mikias0x00@outlook.com</p>
      <p>Updated on: {readableDate}</p>
    </div>
  );
};

export default Footer;
