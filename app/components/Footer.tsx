const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="text-center">
        <p>&copy; 2024 WebDev Co. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://twitter.com" className="hover:opacity-75">
            Twitter
          </a>
          <a href="https://linkedin.com" className="hover:opacity-75">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
