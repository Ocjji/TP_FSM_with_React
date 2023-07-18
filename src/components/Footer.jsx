import React from 'react';
import { FooterWrap } from '../styled/HomeStyled';
import { Link } from 'react-router-dom';
import {FaFacebookSquare} from 'react-icons/fa'
import {RiKakaoTalkFill} from 'react-icons/ri'
import {BsYoutube} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                <div className='links'>
                    <div className='terms'>
                        {/* <span><Link to={'/'}>개인정보처리방침</Link></span>
                        <span><Link to={'/'}>이용약관</Link></span>
                        <span><Link to={'/'}>마이페이지</Link></span> */}
                        <span>개인정보처리방침</span>
                        <span>이용약관</span>
                        <span>마이페이지</span>
                    </div>
                    <div className="sns">
                        <i><FaFacebookSquare/></i>
                        <i><AiOutlineInstagram/></i>
                        <i><RiKakaoTalkFill/></i>
                        <i><BsYoutube/></i>
                    </div>
                </div>
                <div className='info'>
                    <p className='company'>(주) 풋볼스쿼드메이커</p>
                    <p><span>대표이사 : 김형종</span><span>사업자등록번호 : 122-71-00000</span></p>
                    <p><span>전화번호 : 032-232-0000</span><span>팩스 : 032-232-0000</span></p>
                    <p><span>주소 : 인천광역시 연수구 벚꽃로 00, 두손메카빌딩 506호</span></p>
                    <p className='copyfright'>Copyright ⓒ FOOTBALL CLUB All Rights Reserved.</p>
                </div>
                <div className='logo'><img src="https://via.placeholder.com/100x50" alt="풋볼스쿼드메이커" /></div>
            </div>
        </FooterWrap>
    );
};

export default Footer;