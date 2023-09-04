type BadgeSkillProps = {
  name: string;
  htmlText: string;
};

function BadgeSkill({ name, htmlText }: BadgeSkillProps) {
  return (
    <div className="flex items-center rounded-xl shadow-md transition-all duration-300 ease-out bg-slate-100 p-[.3rem] w-fit hover:bg-slate-300 m-1 dark:bg-slate-800 dark:text-slate-200">
      <div className="w-[20px] h-[20px]" dangerouslySetInnerHTML={{ __html: htmlText }}></div>
      <span className="pl-[.2rem] text-[.88rem]">{name}</span>
    </div>
  );
}

export default BadgeSkill;
