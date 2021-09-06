brew install jq
OUTPUT="$(curl http://localhost:8000/api/stocks)"

for i in $(echo "${OUTPUT}" | jq -r '.[] | @base64'); do
  _jq() {
      echo ${i} | base64 --decode | jq -r ${1}
  }
  ID=$(_jq '._id')
  curl -X DELETE http://localhost:8000/api/stocks/${ID}
done
curl http://localhost:8000/api/stocks