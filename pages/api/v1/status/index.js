function status(request, response) {
  response.status(200).json({
    amorCat: "Mil milhões",
  });
}

export default status;
