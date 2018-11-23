import { connect } from 'react-redux';
import DanhSachBaiHoc from "../components/DanhSachBaiHoc";
const dsBaiHocToanDummy = `{
  "_id": "5bd96e527c4ca705165a719c",
  "name": "Toán học",
  "topics": [
    {
      "_id": "5bd93b394cc1f80ed9625a61",
      "name": "Phân số và Số thập phân",
      "lessons": [
        {
          "_id": "5bd916624a6df2038b277217",
          "title": "Phân số"
        },
        {
          "_id": "5bd43df4a6df2038b2ee32ad",
          "title": "Số thập phân"
        }
      ]
    },
    {
      "_id": "5bd93b394cc1f80ed9625a62",
      "name": "Bốn phép tính về số thập phân và Số đo thời gian",
      "lessons": [
        {
          "_id": "5bd916624a6df2038b277212",
          "title": "Bốn phép tính về số thập phân"
        },
        {
          "_id": "5bd43df4a6df2038b2ee32a2",
          "title": "Số đo thời gian"
        }
      ]
    },
    {
      "_id": "5bd93b394cc1f80ed9625a63",
      "name": "Giải toán có lời văn",
      "lessons": [
        {
          "_id": "5bd916624a6df2038b277213",
          "title": "Giải toán có lời văn"
        }
      ]
    },
    {
      "_id": "5bd93b394cc1f80ed9625a64",
      "name": "Đo lường và hình học",
      "lessons": [
        {
          "_id": "5bd916624a6df2038b277214",
          "title": "Đo lường và hình học"
        }
      ]
    }
  ]
}`

const dsBaiHocTiengVietDummy = `{
  "_id": "5bd96e527c4ca705165a719c",
  "name": "Tiếng Việt",
  "topics": [
    {
      "_id": "5bd93b394cc1f80ed9625a61",
      "name": "Luyện từ và câu",
      "lessons": [
        {
          "_id": "5bd916624a6df2038b277211",
          "title": "Từ đồng nghĩa"
        },
        {
          "_id": "5bd43df4a6df2038b2ee32a1",
          "title": "Từ trái nghĩa"
        }
      ]
    },
    {
      "_id": "5bd93b394cc1f80ed9625a62",
      "name": "Tập làm văn",
      "lessons": [
        {
          "_id": "5bd916624a6df2038b277212",
          "title": "Tả cảnh"
        },
        {
          "_id": "5bd43df4a6df2038b2ee32a2",
          "title": "Tả cây cối"
        }
      ]
    },
    {
      "_id": "5bd93b394cc1f80ed9625a63",
      "name": "Mở rộng vốn từ",
      "lessons": [
        {
          "_id": "5bd916624a6df2038b277213",
          "title": "Nhân dân"
        },
        {
          "_id": "5bd43df4a6df2038b2ee32a3",
          "title": "Hòa bình"
        }
      ]
    }
  ]
}`

const mapStateToProps = function (state, ownProps) {
  return {
    monHoc: ownProps.match.params.monhoc,
    dsBaiHoc: (() => {
      //sẽ thay bằng action getDanhSachBaiHoc
      const monHoc = ownProps.match.params.monhoc;
      if (monHoc === 'toan') return JSON.parse(dsBaiHocToanDummy);
      else return JSON.parse(dsBaiHocTiengVietDummy);
    })()
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachBaiHoc);